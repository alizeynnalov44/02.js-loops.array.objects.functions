document.addEventListener('DOMContentLoaded', function() {
    const todoText = document.getElementById('todoText');
    const addBtn = document.getElementById('addBtn');
    const list = document.getElementById('list');
    const errorMsg = document.querySelector('.error-msg');
    const clearBtn = document.getElementById('clearBtn');
    
    
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    renderTasks();
    
    
    document.querySelector('.form').addEventListener('submit', function(e) {
        e.preventDefault();
        if (todoText.value.trim() === '') {
            errorMsg.style.display = 'block';
            return;
        }
        tasks.push(todoText.value.trim());
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
        todoText.value = '';
        errorMsg.style.display = 'none';
    });
    
    
    function renderTasks() {
        list.innerHTML = '';
        tasks.forEach(function(taskText, index) {
            const listItem = document.createElement('li');
            listItem.classList.add('list-item');
            listItem.innerHTML = `
                <div class="list-text">${taskText}</div>
                <div class="list-buttons">
                    <button class="completedBtn manipulationBtn">
                        <i class="fa-solid fa-check"></i>
                    </button>
                    <button class="deleteBtn manipulationBtn">  
                        <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="updateBtn manipulationBtn">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                </div>`;
            list.appendChild(listItem);
        });
        showResultText();
    }
    
    
    clearBtn.addEventListener('click', function() {
        localStorage.removeItem('tasks');
        tasks = [];
        renderTasks();
    });
    
    
    function showResultText() {
        const resultText = document.querySelector('.result-text');
        if (tasks.length > 0) {
            resultText.style.display = 'none';
        } else {
            resultText.style.display = 'block';
        }
    }
    
    list.addEventListener('click', function(e) {
        const target = e.target;
        const listItem = target.closest('.list-item');
        if (target.classList.contains('completedBtn')) {
            listItem.classList.toggle('completed');
        } else if (target.classList.contains('deleteBtn')) {
            const taskIndex = tasks.indexOf(listItem.querySelector('.list-text').textContent);
            if (taskIndex !== -1) {
                tasks.splice(taskIndex, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                renderTasks();
            }
        } else if (target.classList.contains('updateBtn')) {
            const newText = prompt('Enter the new text:', listItem.querySelector('.list-text').textContent);
            if (newText !== null && newText.trim() !== '') {
                const taskIndex = tasks.indexOf(listItem.querySelector('.list-text').textContent);
                if (taskIndex !== -1) {
                    tasks[taskIndex] = newText.trim();
                    localStorage.setItem('tasks', JSON.stringify(tasks));
                    renderTasks();
                }
            }
        }
    });
});

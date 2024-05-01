const hourElementInput = document.querySelector(" .all .hour #hourInput")
const minuteElementInput = document.querySelector(".all .minute #minuteInput")
const secondElementInput = document.querySelector(".all .second #secondInput")
const btnStart = document.querySelector(".btn .btnStart")
const hourBlock = document.querySelector(" .timer .hourBlock h1")
const minuteBlock = document.querySelector(".timer .minuteBlock h1")
const secondBlock = document.querySelector(".timer .secondBlock h1")


btnStart.addEventListener("click" ,function(){
    if (isNaN(hourElementInput.value) || hourElementInput.value < 0 || hourElementInput.value >= 24 ||
    isNaN(minuteElementInput.value) || minuteElementInput.value < 0 || minuteElementInput.value >= 60 ||
    isNaN(secondElementInput.value) || secondElementInput.value < 0 || secondElementInput.value >= 60) {
    feedbackDiv.textContent = "Lütfen geçerli bir zaman girin!";
    return;
}
startTimer();
});
function getTimer(){
    const hour = parseInt(hourElementInput.value);
    const minute = parseInt(minuteElementInput.value);
    const second = parseInt(secondElementInput.value);
    const totalSeconds = hour * 3600 + minute * 60 + second;

    hourElementInput.disabled = true;
    minuteElementInput.disabled = true;
    secondElementInput.disabled = true;
    btnStart.disabled = true;

    const countDownInterval = setInterval(function(){
        hourBlock.textContent = formatTime(Math.floor(totalSeconds / 3600));
        minuteBlock.textContent = formatTime(Math.floor((totalSeconds % 3600) / 60));
        secondBlock.textContent = formatTime(totalSeconds % 60);

        if (totalSeconds < 0) {
            clearInterval(countDownInterval); 
            hourElementInput.disabled = false; 
            minuteElementInput.disabled = false;
            secondElementInput.disabled = false;
            btnStart.disabled = false;
            hourBlock.textContent = "00"; 
            minuteBlock.textContent = "00"; 
            secondBlock.textContent = "00"; 
            alert("Time's up!"); 
        }
    }, 1000)
}

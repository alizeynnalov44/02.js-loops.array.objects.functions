import { BASE_URL } from "./constant.js";



const tBody = document.querySelector("#tbody")
const searchInput = document.querySelector("#searshInput")

axios.get(BASE_URL)
.then(response => {
    const Product = response.data;
    Product.forEach(element => {
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${element.id}<td>
        <td>${element.title}<td>
        <td>${element.price}<td>
        <td><a class="btn btn-primary" href="details.html?id=${element.id}">DETAILS</a></td>
      `;
      tBody.appendChild(row);
    });
})

.catch(error => {
    console.error('API is null:', error);
})
searchInput.addEventListener("input", async function (e) {

    const filtered = customers.filter((item) =>
      item.companyName
        .toLowerCase()
        .trim()
        .includes(e.target.value.toLowerCase().trim())
    );
  

    renderTable(filtered);
  });

let drinksList = [
  {name: "Coca-Cola", price: 500},
  {name: "Coca-Cola Zero", price: 550},
  {name: "Fanta", price: 500},
  {name: "Sprite", price: 500},
  {name: "Jeges tea", price: 600},
];

const tableBody = document.getElementById("drinks-table-body");
const form = document.getElementById("drink-form");
const nameInput = document.getElementById("drink-name");
const priceInput = document.getElementById("drink-price");

const errorMessage = document.createElement("p");
errorMessage.style.color = "red";
form.appendChild(errorMessage);

function populateDrinksTable() {
  tableBody.innerHTML = "";

  for (let i = 0; i < drinksList.length; i++) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const priceCell = document.createElement("td");

    nameCell.textContent = drinksList[i].name;
    priceCell.textContent = drinksList[i].price;

    row.appendChild(nameCell);
    row.appendChild(priceCell);
    tableBody.appendChild(row);
  }
}

populateDrinksTable();

const button = document.getElementById("add-drink-btn");

button.addEventListener("click", function(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const price = Number(priceInput.value);

  if (!name || priceInput.value.trim() === "") {
    errorMessage.textContent = "Minden mezőt tölts ki!";
    return;
  }

  if (!Number.isFinite(price) || price <= 0 || price % 10 !== 0) {
    errorMessage.textContent = "Az árnak 10-zel oszthatónak kell lennie!";
    return;
  }

  drinksList.push({name: name, price: price});

  populateDrinksTable();

  nameInput.value = "";
  priceInput.value = "";
  errorMessage.textContent = "";
});

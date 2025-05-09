// Get DOM Elements

const itemInput = document.getElementById("itemInput");
const totalItems = document.getElementById("itemCount");
const shoppingList = document.getElementById("shoppingList");

let count = 0;
let items = [];

function addItem() {
  const item = itemInput.value.trim();

  if (item === "") {
    alert("Please enter a valid item");
    return;
  }

  console.log(item);
  addShoppingList(item);
  countItems();

  // Clear input after submit.
  itemInput.value = "";
}

function addShoppingList(item) {
  const itemList = document.createElement("li");

  itemList.innerHTML = `
  <li><span>${item}</span></li>
  <li><span><button class="delete-btn">Delete</button></span></li>
  `;

  itemList.querySelector(".delete-btn").addEventListener("click", function () {
    itemList.remove();
  });

  itemList.querySelector("li").addEventListener("click", function () {
    itemList.classList.toggle("purchased");
  });

  shoppingList.appendChild(itemList);
}

function clearShoppingList() {
  shoppingList.innerHTML = "";
  totalItems.textContent = "Total Items: 0";
}

function countItems() {
  count += 1;
  totalItems.textContent = `Total Items: ${count}`;
}

function saveToLocalStorage() {
  localStorage.setItem("shopping-list", JSON.stringify(items));
}

function loadFromLocalStorage() {
  const stored = localStorage.getItem("shopping-list");
  if (stored) {
    items = JSON.parse(stored);
    items.forEach((item) => renderItem(item));
  }
}

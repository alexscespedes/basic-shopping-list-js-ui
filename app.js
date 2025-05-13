// Get DOM Elements

const itemInput = document.getElementById("itemInput");
const itemCountDisplay = document.getElementById("itemCount");
const shoppingList = document.getElementById("shoppingList");
const shoppingForm = document.getElementById("shoppingForm");
const clearButton = document.getElementById("clearButton");

let items = [];

shoppingForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addItem();
});

clearButton.addEventListener("click", clearShoppingList);

window.addEventListener("DOMContentLoaded", loadFromLocalStorage);

function addItem() {
  const itemName = itemInput.value.trim();

  if (itemName === "") {
    alert("Please enter a valid item");
    return;
  }

  const item = {
    id: Date.now(),
    itemName,
    purchased: false,
  };

  items.push(item);
  saveToLocalStorage();
  renderItem(item);
  updateItemCount();

  itemInput.value = "";
}

function renderItem(item) {
  const itemElement = document.createElement("li");
  if (item.purchased) itemElement.classList.add("purchased");

  itemElement.innerHTML = `
  <span>${item.itemName}</span>
  <button class="delete-btn">Delete</button>
  `;

  itemElement.querySelector("span").addEventListener("click", () => {
    item.purchased = !item.purchased;
    itemElement.classList.toggle("purchased");
    saveToLocalStorage();
  });

  itemElement.querySelector(".delete-btn").addEventListener("click", () => {
    items = items.filter((i) => i.id !== item.id);
    itemElement.remove();
    saveToLocalStorage();
    updateItemCount();
  });

  shoppingList.appendChild(itemElement);
}

function updateItemCount() {
  itemCountDisplay.textContent = `Total Items: ${items.length}`;
}

function clearShoppingList() {
  items = [];
  shoppingList.innerHTML = "";
  localStorage.removeItem("shopping-list");
  updateItemCount();
}

function saveToLocalStorage() {
  localStorage.setItem("shopping-list", JSON.stringify(items));
}

function loadFromLocalStorage() {
  const storedItems = localStorage.getItem("shopping-list");
  if (storedItems) {
    items = JSON.parse(storedItems);
    items.forEach((item) => renderItem(item));
    updateItemCount();
  }
}

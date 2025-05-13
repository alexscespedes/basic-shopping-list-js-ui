// Get DOM Elements

const itemInput = document.getElementById("itemInput");
const totalItems = document.getElementById("itemCount");
const shoppingList = document.getElementById("shoppingList");
const shoppingForm = document.getElementById("shoppingForm");

let items = [];

function addItem() {
  const itemName = itemInput.value.trim();

  if (itemName === "") {
    alert("Please enter a valid item");
    return;
  }

  const item = {
    id: Date.now(),
    itemName,
  };

  items.push(item);
  saveToLocalStorage();
  addShoppingList(item);
  countItems();

  // Clear input after submit.
  itemInput.value = "";
}

function addShoppingList(item) {
  const itemList = document.createElement("li");

  itemList.innerHTML = `
  <span>${item.itemName}</span>
  <button class="delete-btn">Delete</button>
  `;

  itemList.querySelector(".delete-btn").addEventListener("click", function () {
    const id = Number(item.id);
    items = items.filter((item) => item.id !== id);

    itemList.remove();
    saveToLocalStorage();
    countItems();
  });

  itemList.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
      itemList.classList.toggle("purchased");
    }
  });

  shoppingList.appendChild(itemList);
}

function clearShoppingList() {
  shoppingList.innerHTML = "";

  items = [];
  localStorage.removeItem("shopping-list");

  countItems();
}

function countItems() {
  totalItems.textContent = `Total Items: ${items.length}`;
}

function saveToLocalStorage() {
  localStorage.setItem("shopping-list", JSON.stringify(items));
}

function loadFromLocalStorage() {
  const stored = localStorage.getItem("shopping-list");
  if (stored) {
    items = JSON.parse(stored);
    items.forEach((item) => addShoppingList(item));
    countItems();
  }
}

window.addEventListener("DOMContentLoaded", loadFromLocalStorage);

// Get DOM Elements

const itemInput = document.getElementById("itemInput");
const totalItems = document.getElementById("itemCount");
const shoppingList = document.getElementById("shoppingList");

// Count items
let item = 0;

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
  //   totalItems.innerHTML = "Total Items 1";
  //   event.preventDefault();
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
  item += 1;
  totalItems.textContent = `Total Items: ${item}`;
  console.log(item);
}

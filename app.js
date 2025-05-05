// Get DOM Elements

const itemInput = document.getElementById("itemInput");
const totalItems = document.getElementById("itemCount");
const shoppingList = document.getElementById("shoppingList");

function addItem() {
  const item = itemInput.value.trim();

  if (item === "") {
    alert("Please enter a valid item");
  }

  console.log(item);
  addShoppingList(item);
  //   totalItems.innerHTML = "Total Items 1";
  //   event.preventDefault();
}

function addShoppingList(item) {
  const itemList = document.createElement("li");

  itemList.innerHTML = `
  <li>${item}</li>
  `;

  shoppingList.appendChild(itemList);
}

// addEventListener("click", function (e) {

// });

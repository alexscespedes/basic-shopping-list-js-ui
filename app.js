// Get DOM Elements

const itemInput = document.getElementById("itemInput");
const totalItems = document.getElementById("itemCount");
const shoppingList = document.getElementById("shoppingList");

function addItem() {
  const item = itemInput.value.trim();

  if (item === "") {
    alert("Please enter a valid item");
    return;
  }

  console.log(item);
  addShoppingList(item);

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

  /*
It has to be a button that when is clicked, has to change name of the item (purchased)
  //  <li class="purchased"><span>Purchase</span></li>

  implement this just when the user select something like "purchase".
  itemList.classList.toggle("purchased");
  */

  itemList.querySelector(".delete-btn").addEventListener("click", function () {
    itemList.remove();
  });

  shoppingList.appendChild(itemList);
}

// addEventListener("click", function (e) {

// });

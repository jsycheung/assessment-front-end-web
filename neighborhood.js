const restaurantArr = ["Veggie Galaxy", "Cafe Luna", "The Mad Monkfish"];
const restaurantBtn = document.querySelector("#restaurant-btn");

function restaurantPicker() {
  const restaurantChoice =
    restaurantArr[Math.floor(Math.random() * restaurantArr.length)];
  alert(`I've chosen the restaurant ${restaurantChoice} for you!`);
}

restaurantBtn.addEventListener("click", restaurantPicker);

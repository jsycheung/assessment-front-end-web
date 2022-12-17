console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Your form has been submitted successfully!");
}

function giveCompliment() {
  alert("You're the best! Duckie loves you!");
}

let form = document.querySelector("#contact");
let rubberDuck = document.querySelector("#rubber-duck");

form.addEventListener("submit", handleSubmit);
rubberDuck.addEventListener("mouseover", giveCompliment);

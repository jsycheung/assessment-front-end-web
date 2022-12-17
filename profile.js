const colorBtn = document.querySelector("#color");
const placeBtn = document.querySelector("#place");
const ritualBtn = document.querySelector("#ritual");

colorBtn.addEventListener("click", () => alert("My favorite color is blue."));
placeBtn.addEventListener("click", () =>
  alert("My favorite place is the Netherlands.")
);
ritualBtn.addEventListener("click", () =>
  alert("My favorite ritual is getting red packets during Chinese New Year.")
);

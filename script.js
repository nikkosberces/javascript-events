const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", () => console.log(button.id));
});

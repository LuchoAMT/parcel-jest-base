import Year from "./year";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#print-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const firstNumber = Number.parseInt(first.value);
  let year = new Year(firstNumber)
  div.innerHTML = "<p>" + year.result() + "</p>";
});

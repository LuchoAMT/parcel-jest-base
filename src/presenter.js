import metods from "./fizzbuzz";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#print-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  div.innerHTML = "<p>" + metods.SecuenciaFB(firstNumber) + "</p>";
});

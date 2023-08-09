import ops from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  
  div.innerHTML = "<p> Resultado Suma " + ops.sumar(firstNumber, secondNumber) + "</p>" + "</br></p> Resultado Multiplicación" + ops.multiplicar(firstNumber, secondNumber) + "</p>";
});

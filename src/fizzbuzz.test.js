//import sumar from "./sumador.js";

import fizzbuzz from "./fizzbuzz";

describe("Sumar", () => {
  it("toma en cuenta la conversión de un numero sin reglas", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

  it("toma en cuenta la conversión de otro numero sin reglas", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });

  it("toma en cuenta la conversión para el 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });

  it("toma en cuenta la conversión para un multiplo de 3", () => {
    expect(fizzbuzz(6)).toEqual("Fizz");
  });

  it("toma en cuenta la conversión para el 5", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });

  it("toma en cuenta la conversión para un multiplo de 5", () => {
    expect(fizzbuzz(10)).toEqual("Buzz");
  });

  it("toma en cuenta la conversión para 15", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });

  it("toma en cuenta la conversión para multiplos de 3 y 5", () => {
    expect(fizzbuzz(30)).toEqual("FizzBuzz");
  });

});

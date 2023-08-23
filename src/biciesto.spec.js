import Year from "./year.js";

describe("Biciestos", () =>{
    it("es bicieto si es divisible por 400", () =>{
        expect(new Year(2000).isLeap()).toEqual(true);
    });

    it("NO es bicieto si no es divisible por 400", () =>{
        expect(new Year(2001).isLeap()).toEqual(false);
    });

    it("NO es bicieto si es divisible por 100 y no por 400", () =>{
        expect(new Year(1700).isLeap()).toEqual(false);
    });

    it("es bicieto si es divisible por 4 y no por 100", () =>{
        expect(new Year(2008).isLeap()).toEqual(true);
    });
})

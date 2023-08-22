class Year {
    constructor(year){
        this.year=year;
    }
    isLeap(){
        if(this.year % 400 == 0) { return true; }
    }
}

describe("Biciestos", () =>{
    it("es bicieto si es divisible por 400", () =>{
        expect(new Year(2000).isLeap()).toEqual(true);
    })
})

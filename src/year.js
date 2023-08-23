class Year {
    constructor(year){
        this.year=year;
    }
    isLeap(){
        if(this.isDivisible(400)) { return true; }
        if(this.isDivisible(4) && this.isNotDivisible(100)) { return true; }
        return false;
    }
    isDivisible(n){
        if(this.year % n == 0){
            return true;
        }
        return false;
    }
    isNotDivisible(n){
        if(this.year % n != 0){
            return true;
        }
        return false;
    }
}

export default Year;

class Car {
    constructor(brand) {
        this.carname = brand;
    }
    get cname() {
        return this.carname;
    }

    set cname(x) {
        this.carname = x;
    }
}
let myCar = new Car("Ford");
console.log(myCar.carname);
console.log("---------------------------");
myCar.cname = "Farary";
console.log(myCar.cname);

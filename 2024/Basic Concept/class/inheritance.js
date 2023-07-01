//? Supper class
class Car {
    constructor(brand) {
        this.carName = brand;
    }
    //? class method
    present() {
        return "I have a " + this.carName;
    }
}
//? Child calss
class Model extends Car {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    //? class method
    show() {
        return this.present() + ", it is a " + this.model;
    }
}

//? create object
let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());
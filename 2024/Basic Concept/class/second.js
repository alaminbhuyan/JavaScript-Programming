//? Create method in a class

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let mycar = new Car("Ford", 2014);
console.log(mycar.name);
console.log(mycar.year);
console.log(mycar.age());
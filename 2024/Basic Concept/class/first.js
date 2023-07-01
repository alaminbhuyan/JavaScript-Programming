//? In JavaScript class is not a object
//? class is a template of JavaScript Object

// create a class
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

// create an object

let obj1 = new Car("TaTa", 2021);
let obj2 = new Car("Farary", 2020);

console.log(obj1.name);
console.log(obj1.year);
console.log("----------------------------------------")
console.log(obj2.name);
console.log(obj2.year);
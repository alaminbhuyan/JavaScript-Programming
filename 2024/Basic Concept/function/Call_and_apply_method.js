
console.log("------------------------ The JavaScript call() & apply() Method -------------------------");

const person = {
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log("------------------------ The call() & apply() Method with Arguments -------------------------");

const person1 = {
    fullName: function (city, country) {
        return `${this.firstName} ${this.lastName} ${city} ${country}`;
    }
}

const person2 = {
    firstName: "Alamin",
    lastName: "Bhuyan"
}
const person3 = {
    firstName: "Tania",
    lastName: "Akter"
}

let obj = person.fullName.call(person2);
let obj1 = person1.fullName.call(person2, 'Dhaka', 'Bangladesh');
let obj2 = person.fullName.apply(person2)
let obj3 = person1.fullName.apply(person2, ['Rogpur', 'Bangladesh']);
console.log(obj);
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log("********************************************");
let obj4 = person.fullName.call(person3);
let obj5 = person1.fullName.call(person3, 'Comilla', 'Bangladesh');
let obj6 = person.fullName.apply(person3)
let obj7 = person1.fullName.apply(person3, ['Rogpur', 'Bangladesh']);
console.log(obj4);
console.log(obj5);
console.log(obj6);
console.log(obj7);

//? The difference is:

//? The call() method takes arguments separately.

//? The apply() method takes arguments as an array.

console.log("------------------------ Function Borrowing -------------------------");

//? With the bind() method, an object can borrow a method from another object.

const person4 = {
    firstName: "Alamin",
    lastName: "Bhuyan",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

const member = {
    firstName: "Fatema",
    lastName: "Akter"
}


let full_name = person4.fullName.bind(member);

console.log("Bind method: ", full_name());
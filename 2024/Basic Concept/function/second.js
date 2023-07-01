
function myFunction() {
    return this;
}

console.log(myFunction);

console.log("------------------------ Invoking a Function as a Method -------------------------")

const myObj = {
    firstName : 'Tajnin',
    lastName : 'Sultana',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    fullName2: function () {
        return this;
    }
}
console.log(myObj.fullName());
console.log(myObj.fullName2());

console.log("------------------------ Invoking a Function with a Function Constructor -------------------------")

function myFunction2(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}

// This creates a new object
const myObj2 = new myFunction2("John", "Doe");

// This will return "John"
console.log(myObj2.firstName);
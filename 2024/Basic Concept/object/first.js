
let person = {
    firstName: "Alamin",
    lastName: "Bhuyan",
    age: 22,
    eyeColor: "Black"
}

console.log(person)
console.log("-----------------------------------------------------")
console.log(typeof (person))
console.log("-----------------------------------------------------")
// ? Accessing Object Properties
console.log(person.firstName)
console.log(person['lastName'])
console.log("-----------------------------------------------------")
// ? In an object can have method or function

let person2 = {
    firstName: "Tania",
    lastName: "Akter",
    Id: 2191081030,
    fullName: function () {
        return this.firstName + " " + this.lastName
    }
}
// * In a function definition, this refers to the "owner" of the function.

// * In the example above, this is the person2 object that "owns" the fullName function.

// * In other words, this.firstName means the firstName property of this object.

// ? accessing the method

console.log(person2.fullName())
console.log(person2.fullName)
console.log("-----------------------------------------------------")
//? we can add new properties
person2.nationality = "Bangladesh"
console.log(person2)
console.log("-----------------------------------------------------")
//? we can delete or remove properties in the objects
delete person2.nationality
console.log(person2)
console.log("-----------------------------------------------------")
//? Any JavaScript Objects can be converted to an array using Object.values() method
let person3 = { name: "John", age: 30, city: "New York" }
let arr = Object.values(person3)
console.log(arr)
console.log(typeof arr)
console.log("-----------------------------------------------------")
console.error("this is an error")
console.warn("this is an warning")

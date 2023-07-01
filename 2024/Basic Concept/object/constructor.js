//? This is a function constructor

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.name = function() {return this.firstName + " " + this.lastName};
  }

//? create an object

let obj = new Person('alamin', 'bhuyan', 21, 'black')

console.log(obj.firstName)

console.log("----------------------------------------------")

//? Adding a Property to an Object

obj.nationality = "English";

console.log(obj.nationality)

console.log("----------------------------------------------")

//? Adding a Property to a Constructor

Person.hometown = "Comilla"

console.log(Person.hometown);

console.log("----------------------------------------------")

//? how to pass parameter

// function Person(firstName, lastName, age, eyeColor) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.eyeColor = eyeColor;
//     this.changeName = function (name) {
//       this.lastName = name;
//     };
//   }

//? Using the prototype Property

//? The JavaScript prototype property allows you to add new properties to object constructors

// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//   }
  
//   Person.prototype.nationality = "English";
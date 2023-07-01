console.log("******************** Access object items using for in loop **********************");
const person = {
    fname: "John",
    lname: "Doe",
    age: 25,
    nationality: "USA"
};

for (let i in person) {
    console.log(person[i]);
}

console.log("******************** Display Using Object.values() **********************");

//? It converts the object into array

console.log(Object.values(person));

console.log("******************** Display Using JSON.stringify() **********************");

console.log(JSON.stringify(person));


console.log("******************** Delete properties **********************");

delete person.nationality;
console.log(person);


console.log("******************** Nested Objects & Access technique **********************");

myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}

console.log(myObj.cars);
console.log(myObj.cars.car1);
console.log(myObj.cars['car2']);
console.log(myObj['cars']['car3']);

console.log("******************** Nested Arrays and Objects & Access technique **********************");

const myObj2 = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}

console.log(myObj2.cars);

console.log();

console.log(myObj2.cars[0]);
console.log(myObj2.cars[0].name);
console.log(myObj2.cars[0].models);
console.log(myObj2.cars[0].models[0]);

console.log("-------------------------------------------------");


for (let i in myObj2.cars) {
    console.log("----------");
    console.log(myObj2.cars[i].name);
    console.log("*********");
    for (let j in myObj2.cars[i].models) {
        console.log(myObj2.cars[i].models[j]);
    }
}

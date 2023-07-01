// * In JavaScript function create by 'function' keyword

// without return value
function add(a, b) {
    console.log(a + b)
}

add(10, 100)

console.log("-------------------------------------------------")
function sub(a, b) {
    return a - b;
}

let result = sub(100, 50)
console.log(result)

console.log("-------------------------------------------------")

//? fahrenheit to celsius converter

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

console.log(toCelsius(89.6))

console.log("-------------------------------------------------")

// * multiple value return in a function in JavaScript

function update() {
    let a = 5, b = 8;
    return [a, b]
}

let result2 = update()
console.log(result2[0])
console.log(result2[1])

console.log("-------------------------------------------------")

const myfun = function print(a, b) {
    return a + b;
}

console.log(myfun(10, 20));

console.log("-------------------------------------------------")

//? JavaScript functions can be used in expressions

function myFunction(a, b) {
    return a + b;
}

let x = myFunction(2, 2) * 3;
console.log(x);

console.log("-------------------------------------------------")

//? JavaScript functions can be used in expressions

function myFunction2(a, b) {
    return arguments.length;
}

let x2 = myFunction(2, 1);
console.log(`the length of arguments: ${x2}`);

console.log("-------------------------------------------------")

//! find the max value

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++){
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(`The max value is: ${findMax(1, 2, 3, 4, 5)}`);
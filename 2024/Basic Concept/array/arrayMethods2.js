//? The map() method creates a new array by performing a function on each array element.

//? The map() method does not execute the function for array elements without values.

//? The map() method does not change the original array.

//? Using normal function

const numbers1 = [5, 6, 4, 3, 2, 8,52,12,28,30,40,18];

const numbers2 = numbers1.map(myFunction);

console.log("Using normal function: ",numbers2);

function myFunction(value, index, array) {
    return value ** 2;
}

console.log("**************************************************");
//? Using Arrow function

let x = numbers1.map((value) => {
    return value ** 2;
})

console.log("Another way: ", x);

console.log("**************************************************");

//* The filter() method creates a new array with array elements that passes a test.

let filter_value = numbers1.filter((value) => value > 18);

console.log("Filter value: ", filter_value);

console.log("**************************************************");

//? The reduce() method runs a function on each array element to produce(reduce it to) a single value.

//? The reduce() method works from left - to - right in the array.See also reduceRight().

//? The reduce() method does not reduce the original array.

//* Note that the function takes 4 arguments:

//* 1) The total(the initial value / previously returned value)
//* 2) The item value
//* 3) The item index
//* 4) The array itself


const numbers = [50, 50, 10, 20, 20];

let sum = numbers.reduce((total, value, index, array) => total + value);

console.log("The sum is: ", sum);

console.log("**************************************************");

//* The reduceRight() method runs a function on each array element to produce(reduce it to) a single value.

//* The reduceRight() works from right - to - left in the array.See also reduce().

//* The reduceRight() method does not reduce the original array.

let sum2 = numbers.reduceRight((total, value, index, array) => total + value);
console.log("The sum is: ", sum2);

console.log("**************************************************");


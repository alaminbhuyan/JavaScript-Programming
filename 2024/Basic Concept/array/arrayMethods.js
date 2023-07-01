//? Converting Arrays to Strings

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("Arrays to string: ", fruits.toString());

console.log("*****************************************************");

console.log("Another way to Array to string: ", fruits.join(" | "));

console.log("*****************************************************");

let popItems = fruits.pop()
console.log(fruits);
console.log("Pop Item: ", popItems);

console.log("*****************************************************");

let new_array_length = fruits.push("Watermelon")
console.log(fruits);
console.log("New array Length: ", new_array_length);
console.log();

new_array_length = fruits.push(["Alamin", "Karim"]);
console.log(fruits);
console.log("New array Length: ", new_array_length);
console.log();

new_array_length = fruits.push("Nahid", "Jalal");
console.log(fruits);
console.log("New array Length: ", new_array_length);

console.log("*****************************************************");

// ? The shift() method removes the first array element and "shifts" all other elements to a lower index.

let fruit = fruits.shift();
console.log(fruits);
console.log("The shifted value: ", fruit);

console.log("*****************************************************");

// ? The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements

new_array_length = fruits.unshift("Lemon")
console.log(fruits);
console.log("New array Length: ", new_array_length);

console.log("*****************************************************");

// ? Merging(Concatenating) Arrays
// ? The concat() method creates a new array by merging(concatenating) existing arrays
// ? The concat() method does not change the existing arrays. It always returns a new array.

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

const myChildren = myGirls.concat(myBoys, arr3, "Peter");
console.log("My Children ars: ", myChildren);
console.log("*****************************************************");

//? The splice() method adds new items to an array.
//? The first parameter(2) defines the position where new elements should be added(spliced in).

//? The second parameter(2) defines how many elements should be removed.

//? The rest of the parameters("Lemon", "Kiwi") define the new elements to be added.

let removed = fruits.splice(2, 2, "Tania", "Joti");
console.log(fruits);
console.log("Removed Items: ", removed);

console.log("*****************************************************");

//? The slice() method creates a new array.
//? The slice() method does not remove any elements from the source array.

let arr = fruits.slice(1)
console.log("Original Array: ", fruits);
console.log("Slice array: ", arr);

console.log("*****************************************************");

console.log("Sort array: ",fruits.sort());

console.log("*****************************************************");

console.log("Reverse array: ", fruits.reverse());

console.log("*****************************************************");

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });

console.log(points);

const points2 = [40, 100, 1, 5, 25, 10];

points2.sort((a, b) => a - b);

console.log(points2);

console.log("*****************************************************");
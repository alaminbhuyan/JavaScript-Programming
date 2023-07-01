//? A JavaScript Set is a collection of unique values.

//? Each value can only occur once in a Set.

//? A Set can hold any value of any data type.

// Method --- Description
// new Set()-->Creates a new Set
// add()-->Adds a new element to the Set
// delete ()-->Removes an element from a Set
// has()-->Returns true if a value exists
// clear()-->Removes all elements from a Set
// forEach()-->Invokes a callback for each element
// values()-->Returns an Iterator with all the values in a Set
// keys()-->Same as values()
// entries()-->Returns an Iterator with the[value, value] pairs from a Set
// Property	Description
// size	Returns the number elements in a Set

console.log("************************** Create a Set *****************************");

const letters = new Set(['a', 'b', 'c', 'd']);

console.log("The set value is: ", letters);

console.log("************************** Access set value *****************************");

letters.forEach(value => console.log(value));

console.log("************************** Add new elements *****************************");

letters.add('alamin');

console.log("Now the set is: ", letters);

console.log("************************** shows the elements *****************************");

console.log(letters.values());

console.log("************************** keys the set *****************************");

console.log(letters.keys());

console.log("************************** entries the set *****************************");

console.log(letters.entries());

console.log("************************** size the set *****************************");

console.log(letters.size);

console.log("************************** typeof the set *****************************");

console.log(typeof(letters));

console.log("************************** instanceof  the set *****************************");

console.log(letters instanceof Set);





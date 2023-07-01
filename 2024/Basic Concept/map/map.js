//? A Map holds key - value pairs where the keys can be any datatype.

//? A Map remembers the original insertion order of the keys.

//? A Map has a property that represents the size of the map.

//* Method	Description
//* new Map()	Creates a new Map object
//* set()	Sets the value for a key in a Map
//* get()	Gets the value for a key in a Map
//* clear()	Removes all the elements from a Map
//* delete ()	Removes a Map element specified by a key
//* has()	Returns true if a key exists in a Map
//* forEach()	Invokes a callback for each key / value pair in a Map
//* entries()	Returns an iterator object with the[key, value] pairs in a Map
//* keys()	Returns an iterator object with the keys in a Map
//* values()	Returns an iterator object of the values in a Map
//* Property	Description
//* size	Returns the number of Map elements


console.log("************************** Create a Map *****************************");

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log("The map is: ", fruits);

console.log("************************** Access single value *****************************");

console.log(fruits.get('apples'));

console.log("************************** set new value *****************************");

fruits.set("watermelon", 150);
console.log("Now The map is: ", fruits);

console.log("************************** size of map *****************************");

console.log("The size of the map: ", fruits.size);

console.log("************************** Delete map value *****************************");

fruits.delete('oranges')
console.log("After delete oranges value: ", fruits);

console.log("************************** has map value or not *****************************");

console.log(fruits.has('watermelon'));

console.log("************************** Keys of map *****************************");

console.log(fruits.keys());

console.log("************************** values of map *****************************");

console.log(fruits.values());

console.log("************************** entries of map *****************************");

console.log(fruits.entries());

console.log("************************** Map.forEacth() *****************************");

fruits.forEach((value, key) => {
    console.log(key," => ", value);
})

console.log("************************** typeof map *****************************");

console.log(typeof(fruits));

console.log("************************** instanceof map *****************************");

console.log(fruits instanceof Map);

//? 1) length
let txt = "alamin bhuyan"
console.log(txt.length)
console.log("------------------------")
//? 2) indexOf()
let txt2 = "Please locate where 'locate' occurs!"
console.log(txt2.indexOf('locate'))
console.log("------------------------")
//? 3) lastIndexOf()
console.log(txt2.lastIndexOf('locate'))
console.log("------------------------")
//? Both indexOf(), and lastIndexOf() return -1 if the text is not found.
console.log("------------------------")
console.log(txt2.indexOf('locate',15))
console.log("------------------------")
console.log(txt2.lastIndexOf('locate',15))
*/ The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.*/
console.log("------------------------")
//* The search() method searches a string for a specified value and returns the position of the match:
//? 4) Search()
console.log(txt2.search('locate'))
console.log("------------------------")
//? 5) slice(start,end)
let str = "Apple, Banana, Kiwi"
console.log(str.slice(7,13))
console.log(str.slice(-12,-6))
console.log(str.slice(7))
console.log(str.slice(-12))
console.log("------------------------")
//? 6) substring(start,end)
//* substring() and slice is same the difference is substring() cannot accept negative value
console.log(str.substring(7,13))
console.log("------------------------")
//? 7) substr(start,length)
console.log(str.substr(7,6))
console.log(str.substr(7))
console.log(str.substr(-4))
console.log("------------------------")

let x = 1234
console.log(x.toString())
console.log(typeof x.toString())
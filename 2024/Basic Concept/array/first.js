// One way to create an array
let arr = [1,2,3,4,5]
console.log(arr)
console.log(typeof arr)
console.log("------------------------------------------")
// Another way to create an array
let arr2 = new Array('alamin','fatema','tania')
console.log(arr2)
console.log("------------------------------------------")
// ? Access the Elements of an Array
console.log(arr2[0])
console.log(arr2[2])
console.log("------------------------------------------")
// ? Change the array elements
arr2[1] = "Mim Akter"
console.log(arr2)
console.log("------------------------------------------")
// ? accessing the last array element
console.log(arr2[arr2.length-1])
console.log("------------------------------------------")
for(i=0;i<arr2.length;i++){
    console.log(arr2[i])
}
console.log("------------------------------------------")
console.log(Array.isArray(arr2))
console.log("------------------------------------------")
console.log(arr2 instanceof Array)
console.log("------------------------------------------")

// The find() method returns the value of the first array element that passes a test function.

// This example finds (returns the value of ) the first element that is larger than 18:

function myFunction(value, index, array){
    return value>18
}
const numbers = [4,9,16,25,29]

let first = numbers.find(myFunction)

console.log(first)
console.log("------------------------------------------")
// The findIndex() method returns the index of the first array element that passes a test function.

// This example finds the index of the first element that is larger than 18:

function myFunction2(value, index, array){
    return value>18
}
const numbers2 = [4,9,16,25,29]

let first2 = numbers.findIndex(myFunction2)

console.log(first2)

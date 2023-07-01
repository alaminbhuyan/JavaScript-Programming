
/*
JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true

*/



let arr = ['alamin','mim','tania','fatema','shamima']

let i
for(i=0;i<arr.length;i++){
    console.log(arr[i])
}
console.log("------------------------------------------------")

arr.forEach(function(elements){
    console.log(elements)
})
console.log("------------------------------------------------")

arr.forEach(myFunction)

function myFunction(value, index, array){
    console.log("Index: ", index, "Value: ", value);
}
console.log("------------------------------------------------")
person = {fname:"alamin",
lname:"bhuyan",
age:22}

for(x in person){
    console.log(person[x])
}
console.log("------------------------------------------------")
for(variables in arr){
    console.log(arr[variables])
}
console.log("------------------------------------------------")

for(let x of arr){
    console.log(x)
}

console.log("------------------------------------------------")

let name = "alaminbhuyan"

for(let i of name){
    console.log(i)
}
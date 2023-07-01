//? Regular function
hello = function () {
    return "Hello, world"
}
console.log(hello())

console.log("------------------------------------------")
//? using arrow function

hello2 = () => {
    return "Hello, Alamin"
}
console.log(hello2())
console.log("------------------------------------------")
//? without return keyword

hello3 = () => "Hello, Everyone"
console.log(hello3())

console.log("------------------------------------------")
//* we can pass parameter also
hello4 = (str) => "Hi," + str

console.log(hello4("alamin"))

console.log("------------------------------------------")
hello5 = str => "Hi," + str
console.log(hello5("Jon"))
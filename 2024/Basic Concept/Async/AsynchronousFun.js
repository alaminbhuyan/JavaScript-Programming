
console.log("***************************** Synchronous function *****************************");

function display() {
    console.log("Synchronous function start");
}

function show(fun) {
    fun();
}

show(display);

console.log("This is Synchronous function END");



console.log("***************************** Asynchronous function *****************************");

setTimeout(function show5() {
    console.log("I am Asynchronous function");
}, 5000);

console.log("This is Asynchronous function END");
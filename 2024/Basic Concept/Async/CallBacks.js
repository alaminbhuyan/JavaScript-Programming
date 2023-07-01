
function display() {
    console.log("Good Bye world");
}


function show(callback) {
    callback();
}

show(display);

console.log("***************************** Pass with parameter *****************************");

function display2(name) {
    console.log(`My name is ${name}`);
}

function show2(name, fun) {
    fun(name);
}

show2("Alamin Bhuyan", display2);

console.log("***************************** Another way Pass with parameter *****************************");

function show3(name, fun) {
    fun(name);
}

show3("Tania Akter", function (name) { console.log(`My name is ${name}`); });

console.log("***************************** Using arrow function *****************************");

function show4(name, fun) {
    fun(name);
}

show4("Tajnin Sultana", name => console.log(`My name is ${name}`));


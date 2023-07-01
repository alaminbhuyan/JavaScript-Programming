//? Default parameter in a function

function display(firstName, lastName = "Bhuyan") {
    console.log(`${firstName} ${lastName}`);
}

display("Alamin");
display(firstName = "Tania", lastName="Akter");

console.log("------------------------Spread parameter -------------------------")
function sum(...args){
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

console.log("The sum is: ", sum(1,2,3,4,5,6,7,8,9,10))
// addEventlistener

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

//? we can also write the function inside the addEventListener() method

document.getElementById("myBtn").addEventListener('click', function myfunction() {
    alert("hello world")
})


//? Add Many Event Handlers to the Same Element

var x = document.getElementById("myBtn2")

x.addEventListener("click", myfunction2)
x.addEventListener("click", someOhterFunction)

function myfunction2() {
    alert("This is the first alert")
}

function someOhterFunction() {
    alert("This is the second alert")
}

//? You can add events of different types to the same element

var y = document.getElementById("myBtn3")

y.addEventListener("mouseover", mouseOver)
y.addEventListener("click", mouseClick)
y.addEventListener("mouseout", mouseOut)

function mouseOver() {
    document.getElementById("demo2").innerHTML += "Moused over!<br>"
}

function mouseClick() {
    document.getElementById("demo2").innerHTML += "Moused Click!<br>"
}

function mouseOut() {
    document.getElementById("demo2").innerHTML += "Moused Out!<br>"
}


//? Add an Event Handler to the window Object

window.addEventListener("resize", function () {
    this.document.getElementById("demo3").innerHTML = Math.random()
})

//? Passing Parameters

let p1 = 5;
let p2 = 7;

document.getElementById("myBtn4").addEventListener("click", function () {
    myfun(p1, p2)
})

function myfun(a, b) {
    var result = a * b
    document.getElementById("demo4").innerHTML = result
}

document.getElementById("myP1").addEventListener("click", function () {
    alert("You clicked the white element!");
}, false);

document.getElementById("myDiv1").addEventListener("click", function () {
    alert("You clicked the orange element!");
}, false);

document.getElementById("myP2").addEventListener("click", function () {
    alert("You clicked the white element!");
}, true);

document.getElementById("myDiv2").addEventListener("click", function () {
    alert("You clicked the orange element!");
}, true);

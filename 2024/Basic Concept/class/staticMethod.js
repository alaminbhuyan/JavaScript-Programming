class Car {
    constructor(name) {
        this.name = name;
    }

    static hello() {
        return "Hello, Alamin Bhuyan!!";
    }
}

let myCar = new Car("Ford");

//? You can not call static function my class object suppose myCar.hell()

console.log(Car.hello());

console.log("--------------------------------------------");

class Student {
    constructor(name) {
        this.name = name;
    }
    static display(x) {
        return "Hello " + x.name;
    }
}

let stu = new Student("Tania akter");

console.log(Student.display(stu));
//? JavaScript get keyword
//? Create an Objects

let person = {
    firstName: "Fatema",
    lastName: "Akter",
    language: "Bangla",
    get lang() {
        return this.language
    }
}

console.log(person.lang)

console.log("-----------------------------------")
//? JavaScript set keyword
let person2 = {
    firstName: "Fatema",
    lastName: "Akter",
    language: "",
    set lang(lang) {
        this.language = lang
    }
}
person2.lang = "Hindi"
console.log(person2.language)

console.log("-----------------------------------")
//? JavaScript function get keyword
let person3 = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        let result = this.firstName + " " + this.lastName
        return result.toUpperCase()
    }
};

console.log(person3.fullName)
console.log("-----------------------------------")
//? JavaScript function set keyword
let person4 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
        this.language = lang.toUpperCase()
    }
};
person4.lang = "Turki"
console.log(person4.language)
console.log("-----------------------------------")

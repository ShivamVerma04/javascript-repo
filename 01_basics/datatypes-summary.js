// Primitive datatypes

// 7 types of primitive datatypes : String, Number, Boolean, null, undefined, symbol, bigInt.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let usermail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

// Reference datatypes

// Arrays, Objects, Functions

const heros = ["shaktiman", "vikraal", "gabraal"]
let myObj = {
    name: "shivam",
    age: 24,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);
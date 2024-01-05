// variable decalrion 

let alpha = 23;

var beta = "whatever";

const gamma = "house"

// variable naming

let myHouseName = "haq manzil"

let myValueIs = 44

var entryValue = 12

const pieVal = 3.14

// dynamic typing

let nameMePlease = "zain"

var radiusVal = 34

const unitedStates = "America"

// Variable Assignment operator

let name = "Aitizaz"

var myVal = 69

const mySound = myVal;


// Global Scope 


var hello = "helloWorld";

function sayHi() {
    console.log(`${hello}`)

    function againPlease() {
        console.log(`${hello}`)
    }
}

// Local scope 


function haris() {

    let harisHello = "hello haris";
    console.log(`hello haris....${harisHello}`)
}

// Hoisting 

function cal() {

    let a = 2;
    let b = 4;

    let c =  a+ b;
    
    if(a > b) {
        c = "a is greter then b";
        console.log(`${c}`)
    }

   else if(b < a) {

    b = "b is not lesser then a";
    console.log(`${b}`)
   }
}

// UNdefined 

// console.log(`${z}`);
let z = "hello world";
console.log(`${z}`)
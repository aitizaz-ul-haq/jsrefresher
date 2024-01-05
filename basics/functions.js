// function declaration

function asapNikki() {
    let and = 90;
    let or = 40;
    let result = and + or;
    return console.log(result);
}

asapNikki();

// function expression 

let hello = function(name) {
   return console.log(`how are you ${name}`);
}

hello(`haris`)

// function parameters

function add(a , b) {
    let c = a + b;
return console.log(`the addition resulted in ${c}`)
}

add(12, 14);

// return statement

function whatEver() {
    let alpha = 87;
    return alpha;
}

whatEver();

// anonymous functions

let haris = function() {
    let harisValue = `hello world`;
    return console.log(harisValue);
}

haris();

// Higher Order Functions

function operateOnNumbers(a , b , operation) {
    return operation(a, b);
}

function add(a , b) {
    return a + b;
}

function sub(a , b) {
    return a - b;
}

const sumResult = operateOnNumbers(2, 4, add);
console.log("sum:", sumResult);

// Callback function

function fetchData(callback) {
    setTimeout(() => {
        const data = { name:"John", age:23 };
        callback(data);
    }, 2000);
}

function processUserData(user) {
    console.log(`User: ${user.name}, Age: ${user.age}`);
}

fetchData(processUserData);

// IIFE function

(function() {
    console.log(`i was immediatly invoked...`)
})()

// Closures

function outer() {
    let x =`hello world`;

    function inner() {
       return console.log(x);
    }

    return inner;
}

outer()

// default parameters


function greet(name = `Aitaizaz`) {
    return console.log(`hello ${name}`)
}

greet();

// Rest operator

function sumWithRest(...numbers) {
    return numbers.reduce((total, num) => total + num , 0);
}

const result1 = sumWithRest(1, 2, 3, 4, 5);
console.log("result 1:", result1);

const result2 = sumWithRest(10, 20, 30);
console.log("result 2:", result2);

const ortho = sumWithRest(3,3,3,3,3,3,3,3,3);
console.log(`result 3: ${ortho}`)

sumWithRest();      

// Recursion

function factorial(n) {

    if(n === 0 || n === 1) {
        return 1;
    } else {
        return  console.log(n * factorial(n - 1)) 
    }
}

// factorial(100);
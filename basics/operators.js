// Artihemetic operators

let valOne = 23;
let valTwo = 45;
let valThree =  22;
let valFour = 88;
let valFive = 123;

function Addition() {
    let result = valOne + valTwo;
    return console.log(`${result}`);
}

function Subtraction() {
    let result = valOne - valTwo;
   return console.log(`${result}`);
}

function division() {
    let result = valThree / valFive;
   return console.log(`${result}`);
}

function mult() {
    let result = valFive * valOne;
   return console.log(`${result}`);
}

Addition();
Subtraction()
division()
mult()

console.log(`==========================End Arithemetic operators======================================`)

// Comparison operators


if(valOne == valTwo) {
    console.log(`valone is equal to valTwo...`)
}

if(valFour === valFour) {
    console.log(`valfour equals val four...`)
}

if(valThree != valFive) {
    console.log(`valThree is not equal to val five..`)
}

if(valOne !== valTwo) {
    console.log(`valOne is not equal to valTwo...`)
}

if(valThree > valFive) {
    console.log(`valThree is greater then valFive...`)
}

if(valTwo < valThree) {
    console.log(`valTwo is less then valThree...`)
}

if(valFour >= valFive) {
    console.log(`valFour is greater then valfive...`)
}

if(valFour <= valThree) {
    console.log(`valFour is less then equal to valThree..`)
}

console.log(`================================end of Comparision=====================`)

// Logical Operators

if(valFive && valThree) {
    console.log(`valfive and val three are true...`)
}

if(valFour || valTwo) {
    console.log(`valSix aor valTwo are true...`)
}

if(!valThree) {
    console.log(`val three does not exist...`)
}

console.log(`================================Logical Operators========================`)

// Assignment Operators

valThree += 2;
console.log(`${valThree}`);

valFour -= 4;
console.log(`${valFour}`);

valFive *= 34;
console.log(`${valFive}`);

valTwo /= 12;
console.log(`${valTwo}`);

console.log(`===================================End of Assigment=======================`)

// Unary operator

valTwo++;
console.log(`${valTwo}`);

valThree--;
console.log(`${valThree}`);

console.log(`==================================end of unary==========================`)

// Conditional Operators

let results = valThree < 18 ? "val exists" : "val does not exist";
console.log(results)

console.log(`=================================results================================`)



















































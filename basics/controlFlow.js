// if statements
let valOne = 78;
let valTwo = 34;

if(valOne > valTwo) {
    console.log(`the value one is bigger then value two....`)
}

// if else statements

let condition = false;

if (condition) {
    console.log(`the condition is true...`)
}

else {
    console.log(`the consition is false`)
}

// if else else if consiftions

let consditionOne = true;
let consditionTwo = false;


if(consditionOne)  {
    console.log(`Condition one is true..`);
} else if(consditionTwo) {
    console.log(`Condition two is true..`);
} else {
    console.log(`All condition are false...`)
}

// nested if statements

const nestedCondition1 = true;
const nestedCondition2 = false;

if(nestedCondition1) {
    if(nestedCondition2) {
        console.log(`Both conditions are true...`)
    } else {
        console.log(`Condition 1 is true`)
    }
} else {
    console.log(`condition 1 is false`);
}

// ternery conditional statements

const firstCase = true;

const result = firstCase ? "Condition one is true" : "COndition two is true";
console.log(result);


// truthy and falsy


const truthy = "haris"
const falsy = "";

if(truthy) {
    console.log(`the value is truthy..`)
}

if(!falsy) {
    console.log(`the value is falsy`)
}
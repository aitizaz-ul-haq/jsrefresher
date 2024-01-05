// for loop 

for(let i = 0; i < 5; i++) {
    console.log(i)
}

// while loop 

let i = 5;

while(i < 5) {
    console.log(i);
    i++;
}

// do while loop 

let o = 9;

do {
    console.log(o);
    console.log(`o is correct...`)
} while (o > 9)

// For In Loop

const person = { name: "Aitaizaz", age: 23 }

for (const key in person) {
   console.log(`${key}: ${person[key]}`)
}

// for of loop

const fruits = ["apples", "oranges", "peeches"];

for(const names of fruits) {
    console.log(names)
}

// foreach

const colors = ["red", "yellow", "green"];

colors.forEach((color) => {
    if(color === "red") {
        console.log(`one of the elements inside the arrays is a color red..`)
    }
})

// map function

const numbers = [1,2,3];

const doubleNumbers = numbers.map( function (number) {
  return number * 2;

})

console.log(doubleNumbers);


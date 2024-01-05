// Creating Arrays

const fruits = ["apples", "oranges", "peeches"];

const numbers = [1, 2, 3, 4, 5, 6];

const mixedArrays = [1, 'two', true, { name: 'john' }];

// Accessing elements

console.log(fruits[0]);
console.log(fruits[2]);

console.log(numbers[3]);
console.log(numbers[1]);

// Modifying elements

const colors = ["red", "yellow", "green"];

let last = colors[2];

console.log(last)

// Array Methods


// a Length

const numericArray = [1,2,3,4,5];

console.log(numericArray.length);

// b push and pop

const eatingThings = ['apple', 'oranges'];

eatingThings.push('orange');

console.log(`fruits added new val ${eatingThings}`)

eatingThings.pop();

console.log(eatingThings);

// c shifts and unshifts

const numericGroup = [1, 2, 3, 4];

numericGroup.unshift(1);

console.log(numericGroup)

numericGroup.shift();

console.log(numericGroup)

// d slice method

const someNumberValues = [1,2,3,4,5,6];

const slicedNum = someNumberValues.slice(1, 4);

console.log(slicedNum);

// e splice 

const nails = ['pointy', 'croked', 'new', 'old'];

nails.splice(1 , 1 , 'black');

console.log(nails)


// f conacat

const arr1 = [1, 2];
const arr2 = [3, 4];

const combinedArray = arr1.concat(arr2);

console.log(`this is a combined array ${combinedArray}`)


// g map

const numbersIN =  [1,2,3];

const doubledNumbers = numbersIN.map(function (number) {
    return number * 2;
});

console.log(`the numbers have been doubled ${doubledNumbers}`);

// Iterating over arrays

// a For Loop

const numstate = [1,2,3,4,5,6];

for(let i = 0; i < numstate.length; i++){
    console.log(numbers[i]);
}

// For Each Method 

const numberspack = [1, 2, 3];

numberspack.forEach(function (number) {
    console.log(number)
})

// For of Loop

const numpackege = [1, 2, 3];

for (const number of numbers) {
    console.log(number)
}

// Array Destruchering

const numpick = [1, 2, 3];

const [a ,b, c] = numpick;

console.log(a ,b , c);










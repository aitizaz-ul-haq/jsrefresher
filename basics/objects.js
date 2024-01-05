// Creating objects

// a. Object Literal Notation:

const obj = {
    name: "john",
    age: 30,
    city: "New York"
}

// b. Object Constructor:

const person = new Object();
person.name = "John";
person.age = 30;
person.city = "New York";

// Accessing Properties

console.log(person.name);
console.log(person.age);

// Modifying Properties

person.age = 21;
person['city'] = "San Fransisco"

// Adding and Deleting Properties

person.job = 'Developer';
delete person.city;

// Object methods

const ppp = {
    name: "John",
    age:30,
    greet: function() {
        console.log(`Hello, my Name is ${this.name}`)
    }
};

ppp.greet();

// Object Destruchering


const peo = {
    name: "jack",
    age: 34,
    city: "New York"
};

const {name, age } = peo;

console.log(name, age)

// Nested Objects

const puple = {
    name : "John",
    address: {
        city : "New York",
        zip: "10001"
    }
};

// Iterating Over Object Properties:

// a for...in loop

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }

// Object Equality

const obj1 = { name: "John" };
const obj2 = { name: "John" };

console.log(obj1 === obj2); // Outputs: false
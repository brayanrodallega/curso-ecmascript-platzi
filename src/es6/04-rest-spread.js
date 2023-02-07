//* Array destructuring

let fruits = ['Apple', 'Banana', 'Orange'];
let [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

// * Object destructuring
let person = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
}

let { name, age, country } = person;
console.log(name, age, country);

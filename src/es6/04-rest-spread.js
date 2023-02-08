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


// * Spread operator

let person = { name: 'Oscar', age: 32};
let country = 'MX'

let data = { id: 1, ...person, country };
console.log(data);

// * Rest operator

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
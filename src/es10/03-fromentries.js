let person = {
    name: 'Brayan',
    age: 20,
};

//* Transform an object into an array of arrays
let arrayPerson = Object.entries(person); // [ [ 'name', 'Brayan' ], [ 'age', 20 ] ]
console.log(arrayPerson);

//* Transform an array of arrays into an object
let entries = Object.fromEntries(arrayPerson); // { name: 'Brayan', age: 20 }
console.log(entries);

//? --------------------------------------------------------------------------------------------

const entries2 = new Map([['name', 'Brayan' ], [ 'age', 20 ]]);
console.log(entries2); // Map(2) { 'name' => 'Brayan', 'age' => 20 }
console.log(Object.fromEntries(entries2)); // { name: 'Brayan', age: 20 }
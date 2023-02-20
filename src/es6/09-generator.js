
function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Brayan', 'Luis', 'Gonzalez', 'Garcia', 'Oscar']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

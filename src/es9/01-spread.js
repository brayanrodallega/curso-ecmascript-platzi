const user = { username: "Brayan", age: 20, coutry: "CO" };
const { username, ...values } = user;
console.log(username);
console.log(values);
console.table(user);
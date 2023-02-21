const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'));
  });
};

const anotherFnAsync = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('After await');
};

console.log('Before');
anotherFnAsync();
console.log('After');
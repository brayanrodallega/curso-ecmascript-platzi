const promise1 = new Promise((resolve, reject) => reject('Error 1'));
const promise2 = new Promise((resolve, reject) => resolve('Success 2'));
const promise3 = new Promise((resolve, reject) => resolve('Success 3'));

Promise.any([promise1, promise2, promise3])
    .then((value) => console.log(value))
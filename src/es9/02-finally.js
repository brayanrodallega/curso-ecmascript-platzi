const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('True');
        } else {
            reject('False');
        }
    });
};

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.error(err))
    .finally(() => console.log('Finalizo'));
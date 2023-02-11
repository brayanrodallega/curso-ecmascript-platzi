const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000);
        } else {
            const error = new Error('Ups!');
            reject(error);
        }
    });
};

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.error(err));
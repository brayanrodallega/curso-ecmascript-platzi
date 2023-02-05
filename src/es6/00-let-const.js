const fruit = () => {
    if (true) {
        var fruit1 = 'apple'; // var is function scope
        let fruit2 = 'banana'; // let is block scope
        const fruit3 = 'kiwi'; // const is block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruit();
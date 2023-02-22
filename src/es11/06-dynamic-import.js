const button = document.getElementById('btn');

button.addEventListener('click', async () => {
    const module = await import('./module.js');
    console.log(module);
    module.hello();
});

// button.addEventListener('click', async () => {
//     const { sayHello } = await import('./module.js');
//     sayHello();
// });
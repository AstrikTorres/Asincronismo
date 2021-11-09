const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do something Async'), 3000)
            : reject(new Error('Test Error'))
    });
}

// indicamos con "async" que esta función es asíncrona y debe esperar algo para seguir su ejecución.
const doSomething = async () => {
    /* la const something va a guardar el return de la función "doSomethingAsync",
    gracias a que esperara a que termine de ejecutarse por la palabra reservada "await".*/
    const something = await doSomethingAsync();
    // La respuesta de la promesa ya esta en la constante something.
    console.log(something); // input: Do something Async
}

console.log('Before');
doSomething();
console.log('After');

// Hacemos lo mismo pero ingresando nuestro código en una estructura try/catch 
// para "capturar los errores" que puedan ocurrir.
const doSomethingTryCatch = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch {
        console.error(error);
    }
}

console.log('Before');
doSomethingTryCatch();
console.log('After');
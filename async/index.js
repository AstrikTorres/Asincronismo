const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do something Async'), 3000)
            : reject(new Error('Test Error'))
    });
}

// indicamos con "async" que esta función es asíncrona y debe esperar algo para seguir su ejecución.
/*  Al llamar a nuestra función asíncrona doSomething ocurre:
    1. la const something va a guardar el return de la función principal.
    2. Gracias a la palabra "await" esperara a que la función principal 
       termine de ejecutarse para continuar.
    3. La respuesta de la promesa ya esta en la constante something.
    4. Imprimimos something que contiene la respuesta de la promesa.
       en este caso "Do something Async"
*/
const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something); 
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
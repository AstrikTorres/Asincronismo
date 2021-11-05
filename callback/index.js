const sum = (num1, num2) => {
    return num1 + num2;
}

const calc = (num1, num2, callback) => {
    return callback(num1, num2);
}

console.log(calc(6, 2, sum));

/* ----------------------------------- */

const date = (callback) => {
    console.log(`date -- ${new Date}`); // Se genera la primer fecha
    setTimeout(() => { 
        let date = new Date; // Se genera la segunda fecha despues de 3 segundos
        callback(date); // Se ejecuta la funcion "callback", la cual pasamos por parametro
    }, 3000);
}

/* Esta funcion imprime la variable let date de la funcion date,
que es la segunda fecha generada */
const printDate = (dateNow) => { 
    console.log(`printDate -- ${dateNow}`); 
}

// Se ejecuta la funcion date, la cual contiene la funcion printDate como callback o parametro.
date(printDate); 
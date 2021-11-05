const somethingWillHappen = () => {
    //retornar una promesa con dos argumentos (resolve=si se ejecuta, reject=si se rechaza)
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });
};
//ejecutamos la funcion
somethingWillHappen()
    //si estamos obteniendo un resolve
    .then(response => console.log(response))
    //si obtenemos un reject
    .catch(error => console.log(error));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000);
        } else {
            // Con "new Error" podemos debbugear mejor
            const error = new Error('Error');
            reject(error);
        }
    });
};

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.log(error));

//ejecutamos todas las promesas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => console.log('Array of response:', response))
    .catch(error => console.log(error));
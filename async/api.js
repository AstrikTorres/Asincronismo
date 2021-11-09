let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const api = 'https://rickandmortyapi.com/api/character/';

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error(`Error ${url_api}`))
            }
        });
        xhttp.send();
    });
};

const anotherFunction = async (url_api) => {
    try {
        // Espera a que se haga la primer consulta a la API y se guarde en la variable data
        const data = await fetchData(url_api);
        // Espera a que se haga la segunda consulta y se guarde en la variable character
        const character = await fetchData(`${url_api}${data.results[0].id}`);
        // Espera a que se haga la tercera consulta y se guarde en la variable origin
        const origin = await fetchData(character.origin.url);
        // imprimimos las datos de la api
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
};

console.log('Before');
anotherFunction(api);
console.log('After');
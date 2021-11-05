// Instanciando el request.
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

fetchData(api)
    .then(data => {
        console.log(data.info.count);
        return fetchData(api + data.results[0].id);
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url);
    })
    .then(data => {
        console.log(data.dimension);
    })
    .catch(error => console.error(error));
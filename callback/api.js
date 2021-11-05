// Implementación de una API con XMLHttpRquest

// Instanciando el request.
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// direccion de la API
const api = 'https://rickandmortyapi.com/api/character/';

const fetchData = (url_api, callback) => {
    // referencia al objeto XMLHttpRequest
    let xhttp = new XMLHttpRequest();
    // abrir la conexion
    xhttp.open('GET', url_api, true);
    // cuando se recibe la respuesta se ejecuta la funcion
    xhttp.onreadystatechange = function(e) {
        // Verificacion de que el estado de la peticion sea correcto
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                // si la peticion fue exitosa
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                // si la peticion no fue exitosa
                const error = new Error('Error' + url_api);
                return callback(error, null);
            }
        }
    };
    // Envio de la peticion
    xhttp.send();
};

fetchData(api, (error1, data1) => {
    // si error, matamos retornando un error
    if(error1) return console.error(error1);
    // luego buscamos en la api el id de Rick
    fetchData(api + data1.results[0].id, (error2, data2) => {
      // si error, matamos retornando un error
      if(error2) return console.error(error2);
      // por ultimo la consulta a la api que contiene su dimension
      fetchData(data2.origin.url, (error3, data3) => {
        // si error, matamos retornando un error
        if(error3) return console.error(error3);
        
        // mostramos los resultados :) 
        console.log(data1.info.count);
        console.log(data2.name);
        console.log(data3.dimension);
        
        // rutas de las peticiones en orden
        console.log(api);
        console.log(api + data1.results[0].id); 
        console.log(data2.origin.url); 
      
      });
    });
});
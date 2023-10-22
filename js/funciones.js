import {contenedor} from "./selectores.js";

// Soportar la busqueda de los nombres de las peliculas
export const parametros = {
    nombre: ""
}

// En base a los parametros ingresados va a asignar las peliculas
export function searchMovies(e){
    parametros.nombre = e.target.value;
    buscar();
}

function buscar(){
    const {nombre} = parametros;

    const url = `http://www.omdbapi.com/?apikey=5874bef9&s=${nombre}`;

    fetch(url)
        .then((respuesta)=>{
            return respuesta.json();
        })

        .then((data)=>{
            injectHTML(data.Search);
        })

        .catch(()=>{

        })
}

function injectHTML(cards) {
    limpiar();
    cards.forEach((card) => {
        const { Poster, Title, Year, imdbID } = card;
        const pelicula = document.createElement('div');
        pelicula.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${Poster}" class="card-img-top" style="height: 400px";" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${Title}</h5>
                    <p class="card-text">${Year}</p>
                    <a href="https://www.imdb.com/title/${imdbID}" class="btn btn-primary" target="_blank">Movies</a>
                </div>
            </div>
        `;
        contenedor.appendChild(pelicula);
    });
}


// que no se dupliquen las peliculas
function limpiar(){
    let m = document.querySelectorAll('div')
    for (let i = 0; i < m.length; i++){
        m[i].remove();
    }
}
import {busqueda} from "../selectores.js";
import {searchMovies} from "../funciones.js";

class App{
    constructor(){
        this.initApp();
    }

    initApp(){
        busqueda.addEventListener('input', searchMovies);
    }
}

export default App;

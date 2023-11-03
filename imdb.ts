
import { Movie } from "./movie"

class Imdb {
    public peliculas: Movie []

    constructor(peliculas:Movie []) {
        this.peliculas = peliculas
    }

public escribirEnFicheroJSON(nombreFichero:string):void {
    let stringJSON = JSON.stringify(this)
    const fs = require('fs');
    fs.writeFileSync(`${nombreFichero}.json`, stringJSON)
}

public obtenerInstanciaIMDB(nombreFichero:string):Imdb {
    const fs = require(`fs`)
    let ficheroDATA = fs.readFileSync(`${nombreFichero}`, "utf8")
    let objetoIMDB = JSON.parse(ficheroDATA)
    return objetoIMDB
} 
}

export {Imdb}
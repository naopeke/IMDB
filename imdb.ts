
import { Movie } from "./movie"

class Imdb {
    public peliculas: Movie []

    constructor(peliculas:Movie []) {
        this.peliculas = peliculas
    }
}

export {Imdb}
import { Professional } from './professional'
import { Movie } from './movie'

export class Imdb {
    public movies: Movie[]

    constructor(movies: Movie[]){
        this.movies = movies;
    }

    //método show movies
    public showMovies():void {
        this.movies.forEach((movie, index) => {
            console.log(`Movie ${index}:\n${movie.showDatas()};`)
            console.log();
            console.log();
        });
        //array.forEach(function(currentValue, index, array){ここに処理}  
        //array.forEach((currentValue, index) => {ここに処理})  
    }

//paso6
// console.log(JSON.stringify())

    //método - escribirEnFicheroJSON(nombreFichero: string)
    public escribirEnFicheroJSON(nombreFichero: string){
        let stringImdb = JSON.stringify(this.movies)
        const fs = require('fs');
        fs.writeFileSync('nombreFichero', stringImdb);
    }

    //método - obtenerInstanciaIMDB(nombreFichero:string):Imdb
    public obtenerInstanciaIMDB(nombreFichero:string):Imdb{
        const fs = require('fs');
        let stringImdbBBDD = fs.readFileSync(nombreFichero, 'utf-8');
        let imdbBBDDtoJSObject = JSON.parse(stringImdbBBDD);
        return new Imdb(this.movies)
    }

}



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
            console.log(`Movie ${index +1}:\n`)
            movie.showData();
            console.log();
            console.log();
        });
        //array.forEach(function(currentValue, index, array){ここに処理}  
        //array.forEach((currentValue, index) => {ここに処理})  
    }

//paso6
    // método - JSON.stringify())
    public JSONstring(): string{
        return JSON.stringify(this.movies);
    }

    

    //método - escribirEnFicheroJSON(nombreFichero: string)
    public escribirEnFicheroJSON(nombreFichero: string){
        const fs = require('fs');
        //fs.writeFile(file, data[, options], callback)
        fs.writeFileSync(nombreFichero, this.JSONstring());
//        console.log('Data has been written.')
    }

    //método - obtenerInstanciaIMDB(nombreFichero:string):Imdb
    public obtenerInstanciaIMDB(nombreFichero:string): Imdb {
        const fs = require('fs');
        //fs.readFileSync(path[, options])
        let data = JSON.parse(fs.readFileSync(nombreFichero, 'utf-8'));
            return new Imdb(data);
        }
        // let stringImdbBBDD = fs.readFileSync(nombreFichero, 'utf-8');
        // let imdbBBDDtoJSObject = JSON.parse(stringImdbBBDD);
        // return new Imdb(imdbBBDDtoJSObject);
    }




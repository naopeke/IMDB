import { Professional } from './professional'
import { Movie } from './movie'

export class Imdb {
    public movies: Movie[]

    constructor(movies: Movie[]){
        this.movies = movies;
    }

    public showMovies():void {
        this.movies.forEach((movie, index) => {
            console.log(`Movie ${index}:\n${movie.showDatas()};`)
            console.log();
            console.log();
        });
        //array.forEach(function(currentValue, index, array){ここに処理}  
        //array.forEach((currentValue, index) => {ここに処理})  
    }
}

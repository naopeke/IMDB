import { Professional } from './professional'
//Clase Movie
export class Movie {
    public title: string;
    public releaseYear: number;
    public actors?: Professional[];
    public nationality: string;
    public director?: Professional;
    public writer?: Professional;
    public language?: string;
    public platform?: string;
    public isMCU?: boolean;
    public mainCharacterName?: string;
    public producer?: string;
    public distributor?: string;
    public genre: string;

    constructor(title: string, releaseYear: number, nationality: string, genre: string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }

    //método mostrar los datos de las peliculas
    public showData ():void {
        console.log(`Title : ${this.title}`);
        console.log(`Release Year : ${this.releaseYear}`);

        // correcting this part
        // console.log(`actor : ${this.actors}`)
        if (this.actors && this.actors.length > 0){
            console.log('Actors :');
            this.actors.forEach((actor, index) => {
                console.log(`${actor?.name ?? 'No Data'}`);
            })
        }
        
        console.log(`Nationality : ${this.nationality}`)
        console.log(`Director : ${this.director?.name?? 'No Data'}`)
        console.log(`Writer : ${this.writer?.name?? 'No Data'}`)
        console.log(`Language : ${this.language?? 'No Data'}`)
        console.log(`Platform : ${this.platform?? 'No Data'}`)
        console.log(`MCU(Marvel Cinematic Universe) : ${this.isMCU?? 'No Data'}`)
        console.log(`Main Character Name : ${this.mainCharacterName?? 'No Data'}`)
        console.log(`Producer : ${this.producer?? 'No Data'}`)
        console.log(`Distributor : ${this.distributor?? 'No Data'}`)
        console.log(`Genre : ${this.genre}`)
    }
}

//optional chaining https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
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
    public showDatas ():void {
        console.log(`title : ${this.title}`);
        console.log(`releaseYear : ${this.releaseYear}`);

        // correcting this part
        // console.log(`actor : ${this.actors}`)
        if (this.actors && this.actors.length > 0){
            console.log('actors :');
            this.actors.forEach((actor, index) => {
                console.log(`${actor.name}`);
            })
        }
        
        console.log(`nationality : ${this.nationality}`)
        console.log(`director : ${this.director?.name}`)
        console.log(`writer : ${this.writer?.name}`)
        console.log(`language : ${this.language}`)
        console.log(`platform : ${this.platform}`)
        console.log(`isMCU : ${this.isMCU}`)
        console.log(`mainCharacterName : ${this.mainCharacterName}`)
        console.log(`producer : ${this.producer}`)
        console.log(`distributor : ${this.distributor}`)
        console.log(`genre : ${this.genre}`)
    }
}

//optional chaining https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
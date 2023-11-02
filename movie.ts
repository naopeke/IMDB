import { Professional } from "./professional"

class Movie {
    public tittle:string
    public releaseYear: number
    public actors: Professional[]
    public nacionality: string
    public director: Professional
    public writer: Professional
    public language: string
    public plataforma: string
    public isMCU: boolean
    public mainCharacterName: string
    public producer: string
    public distributor: string
    public genre: string

    constructor (title:string, releaseYear:number, nationality:string, genre:string) {
        this.tittle = title
        this.releaseYear = releaseYear
        this.nacionality = nationality
        this.genre = genre
    }

    public printAll ():void {
        for(let propiedad in this){
            if(typeof this[propiedad] != "function"){
            console.log(`${propiedad}: ${this[propiedad]}`)
        } else if (this == undefined) {console.log("no hay datos");
    }
}
}
}
export {Movie}
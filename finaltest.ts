import { Professional } from "./professional";
import { Movie } from "./movie";
import { Imdb } from "./imdb";
import { log } from "console";




// readLineSync

let readLineSync = require("readline-sync")

// solicite por pantalla cada uno de las propiedades 
// de la clase Profesional

let name:string = readLineSync.question("What is your name?")
let age:number = readLineSync.question("How old are you?")
let weight: number = readLineSync.question("How much do you weigh?")
let height: number = readLineSync.question("How tall are you?")
let isRetired:boolean = readLineSync.question("Are you retired?")
let nationality:string = readLineSync.question("What is your nationality?")
let oscarNumber:number = readLineSync.question("How many Oscars do you have?")
let profession:string = readLineSync.question("What is your profession?")

// inserte un nuevo profesional a una película del fichero 
// “imdbBBDD.json

let professional1 = new Professional ("Ewan Mcgregor",52,80,177,false,"Británica",0,"actor")
let profesional4 = new Professional (name, age, weight, height,isRetired,nationality,oscarNumber,profession)
let movie1 = new Movie("Trainspotting",1996,"británica","drama/crimen")
movie1.actors = [professional1]
let imdb1 = new Imdb ([movie1])


let json = imdb1.escribirEnFicheroJSON("imdbBBDD2")
imdb1.obtenerInstanciaIMDB("imdbBBDD2.json");
imdb1.movies[0].actors.push(profesional4)
imdb1.escribirEnFicheroJSON("imdbBBDD2")






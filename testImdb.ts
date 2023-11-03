import { Professional } from "./professional"
import { Movie } from "./movie"
import { Imdb } from "./imdb"


let professional1 = new Professional ("Ewan Mcgregor",52,80,177,false,"Británica",0,"actor")
let professional2 = new Professional ("Danny Boyle", 67, 80, 184, false, "británico", 1, "Director")
let professional3 = new Professional ("Irvin Welsh", 65, 80, 182, false, "britanica", 0, "escritor")
let movie1 = new Movie("Trainspotting",1996,"británica","drama/crimen")

movie1.actors = [professional1]
movie1.director = professional2
movie1.writer = professional3
movie1.language = "English"
movie1.language = "Prime Video"
movie1.isMCU = false
movie1.mainCharacterName = "Mark Renton"
movie1.producer = "Andrew Macdonald"
movie1.distributor = "PolyGram Filmed Entertainment"

let imdb1 = new Imdb ([movie1])
console.log(imdb1);

// Convertir a un string el objeto Imdb.
// - PISTA: JSON.stringify()

let stringImdb1 = (JSON.stringify(imdb1));

// Guardar dicho objeto en un fichero JSON con el nombre “imdbBBDD.json”.
// - PISTA: fs.writeFileSync(file, data[, options])

declare var require: any;
const fs = require('fs');

fs.writeFileSync(`imdbBBDD.json`, stringImdb1)

// Leer el fichero “imdbBBDD.json” y almacenarlo en una instancia de la clase Imdb
// - PISTA: fs.readFileSync(path[, options])
// - PISTA: JSON.parse()

let imdbBBDDData = fs.readFileSync("imdbBBDD.json", "utf8")
let imdbBBDD = JSON.parse(imdbBBDDData)
console.log(imdbBBDD);



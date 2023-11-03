import { Professional } from "./professional";
import { Movie } from "./movie";

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

movie1.printAll()



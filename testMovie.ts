<<<<<<< HEAD
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


=======
import { Professional } from './professional'
import { Movie } from './movie'

let person1 = new Professional ('Harrison Ford', 81, 80, 185, false, 'USA', 0, 'Producer');
let person2 = new Professional ('Sean Connery', 90, 93, 188, true, 'UK', 1, 'Producer');
let director = new Professional ('Steven Spielberg', 76, 70, 172, false, 'USA', 23, 'director');
let writer = new Professional ('Jeffrey David Boam', 53, 60, 165, true, 'USA', 0, 'writer');

let movie1 = new Movie ('Indiana Jones and the Last Crusade', 1989,'USA', 'action');
movie1.showData();
>>>>>>> 6cb421633a7b10ee5578b1756a40b85dc09e301d

import { Professional } from './professional'
import { Movie } from './movie'

let person1 = new Professional ('Harrison Ford', 81, 80, 185, false, 'USA', 0, 'Producer');
let person2 = new Professional ('Sean Connery', 90, 93, 188, true, 'UK', 1, 'Producer');
let director = new Professional ('Steven Spielberg', 76, 70, 172, false, 'USA', 23, 'director');
let writer = new Professional ('Jeffrey David Boam', 53, 60, 165, true, 'USA', 0, 'writer');

let movie1 = new Movie ('Indiana Jones and the Last Crusade', 1989,'USA', 'action');
movie1.showData();

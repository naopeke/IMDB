import { Professional } from './professional'
import { Movie } from './movie'
import { Imdb } from './Imdb'


let person1 = new Professional ('Harrison Ford', 81, 80, 185, false, 'USA', 0, 'Producer');
let person2 = new Professional ('Sean Connery', 90, 93, 188, true, 'UK', 1, 'Producer');
let person3 = new Professional ('Johnny Depp', 60, 75, 178, false, 'USA', 3, 'Producer')

let director1 = new Professional ('Steven Spielberg', 76, 70, 172, false, 'USA', 23, 'Director');
let director2 = new Professional ('Gore Verbinski', 59, 90, 185, false, 'USA', 1, 'Director');

let writer1 = new Professional ('Jeffrey David Boam', 53, 60, 165, true, 'USA', 0, 'Writer');
let writer2 = new Professional  ('Ted Eliott', 62, 65, 170, false, 'USA', 2, 'Writer');

let movie1 = new Movie ('Indiana Jones and the Last Crusade', 1989, 'USA', 'Action');
let movie2 = new Movie ('Pirates of the Caribbean: The Curse of the Black Pearl', 2003, 'USA', 'Action');


movie1.actors = [person1, person2];
movie1.director = director1;
movie1.writer = writer1;
movie1.language = 'English'
movie1.platform = 'Netflix';
movie1.isMCU = false;
movie1.mainCharacterName = 'Indiana Jones';
movie1.producer = 'Steven Spielberg';
movie1.distributor = 'Paramount Pictures'

movie2.actors = [person3];
movie2.director = director2;
movie2.writer = writer2;
movie2.language = 'English'
movie2.platform = 'HBO';
movie2.isMCU = false;
movie2.mainCharacterName = 'Jack Sparrow';
movie2.producer = 'Gore Verbinski';
movie2.distributor = 'Buena Vista Pictures Distribution'



let imdb1 = new Imdb([movie1, movie2]);
console.log('test of showMovies()')
console.log('');
imdb1.showMovies();


//paso6

//オブジェクトや配列などの値を JSON 形式の文字列に変換
//change objects/array to JSON string
// let stringImdb = JSON.stringify(imdb1)
// const fs = require('fs');

// //ファイルにデータを同期的に書き込む
// // write the data in the file synchronously
// //fs.writeFileSync(file, data[, options])
// fs.writeFileSync('imdbBBDD.json', stringImdb);

// // ファイルの内容を同期的に読み込む
// // read the file synchronously
// //fs.readFileSync(path[, options])
// //https://cratecode.com/info/nodejs-fs-readfilesync-usage
// let stringImdbBBDD = fs.readFileSync('imdbBBDD.json', 'utf-8');

// //JSON データを JavaScript のオブジェクトに変換
// //change JSON data to Javascript object
// //JSON.parse(text, reviver)
// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
// let imdbBBDDtoJSObject = JSON.parse(stringImdbBBDD);



//-----------------------------------------------------
const fs = require('fs');
imdb1.JSONstring();
//write the movies in JSON file
imdb1.escribirEnFicheroJSON('imdbBBDD.json');
console.log('Data has been written in the test.')

//read from the file JSON
let readImdbFromJSON = new Imdb([]);
readImdbFromJSON.obtenerInstanciaIMDB('imdbBBDD.json');
readImdbFromJSON.showMovies();

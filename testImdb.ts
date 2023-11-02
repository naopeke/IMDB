import { Professional } from './professional'
import { Movie } from './movie'
import { Imdb } from './Imdb'


let person1 = new Professional ('Harrison Ford', 81, 80, 185, false, 'USA', 0, 'Producer');
let person2 = new Professional ('Sean Connery', 90, 93, 188, true, 'UK', 1, 'Producer');
let director = new Professional ('Steven Spielberg', 76, 70, 172, false, 'USA', 23, 'director');
let writer = new Professional ('Jeffrey David Boam', 53, 60, 165, true, 'USA', 0, 'writer');

let movie1 = new Movie ('Indiana Jones and the Last Crusade', 1989, 'USA', 'Action');
let movie2 = new Movie ('A todo tren. Destino Asturias', 2021, 'Spain', 'Comedy');

let imdb1 = new Imdb([movie1, movie2]);
console.log('test of showMovies()')
console.log('');
imdb1.showMovies();


//paso6

//オブジェクトや配列などの値を JSON 形式の文字列に変換
//change objects/array to JSON string
let stringImdb = JSON.stringify(imdb1)
const fs = require('fs');

//ファイルにデータを同期的に書き込む
// write the data in the file synchronously
//fs.writeFileSync(file, data[, options])
fs.writeFileSync('imdbBBDD.json', stringImdb);

// ファイルの内容を同期的に読み込む
// read the file synchronously
//fs.readFileSync(path[, options])
//https://cratecode.com/info/nodejs-fs-readfilesync-usage
let stringImdbBBDD = fs.readFileSync('imdbBBDD.json', 'utf-8');

//JSON データを JavaScript のオブジェクトに変換
//change JSON data to Javascript object
//JSON.parse(text, reviver)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
let imdbBBDDtoJSObject = JSON.parse(stringImdbBBDD);


//write the movies in JSON file
imdb1.escribirEnFicheroJSON('imdbBBDD.json');

//read from the file JSON
let readImdbFromJSON = imdb1.obtenerInstanciaIMDB('imdbBBDD.json');
console.log('Paso 6, 7, 8');
console.log('');
readImdbFromJSON.showMovies();

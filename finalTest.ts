import { Professional } from './professional'
import { Movie } from './movie'
import { Imdb } from './Imdb'

//readLineSync
const readlineSync = require('readline-sync');

let inputName = readlineSync.question('Enter name: ');
let inputAge =  readlineSync.question('Enter age: ');
let inputWeight =  readlineSync.question('Enter weight: ');
let inputHeight = readlineSync.question('Enter height: ');
let inputRetired =  readlineSync.question('Enter if he/she is retired or not: ');
let inputNationality =  readlineSync.question('Enter nationality: ');
let inputOscarNumber =  readlineSync.question('Enter numbers of Oscar: ');
let inputProfession =  readlineSync.question('Enter profession: ');

inputAge = parseFloat(inputAge);
inputWeight = parseFloat(inputWeight);
inputHeight = parseFloat(inputHeight);
inputOscarNumber = parseFloat(inputOscarNumber);

const fs = require('fs');

//exiting data
let data = JSON.parse(fs.readFileSync('imdbBBDD.json', 'utf-8'));
data = [];

//new data
let newProfessional = new Professional (inputName, inputAge, inputWeight, inputHeight, inputRetired, inputNationality, inputOscarNumber, inputProfession)

data.push(newProfessional);
fs.writeFileSync('imdbBBDD.json', JSON.stringify(data));


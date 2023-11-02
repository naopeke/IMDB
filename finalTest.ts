import { Professional } from './professional'
import { Movie } from './movie'
import { Imdb } from './Imdb'

//readLineSync
const readlineSync = require('readline-sync');
let inputName = readlineSync.question('Enter name');
let inputAge =  readlineSync.question('Enter age');
let inputWeight =  readlineSync.question('Enter weight');
let inputRetired =  readlineSync.question('Enter if he/she is retired or not');
let inputNationality =  readlineSync.question('Enter nationality');
let inputOscarNumber =  readlineSync.question('Enter numbers of Oscar');
let inputProfession =  readlineSync.question('Enter profession');

inputAge = parseFloat(inputAge);
inputWeight = parseFloat(inputWeight);
inputOscarNumber = parseFloat(inputOscarNumber);

// let newProfessional = new Professional (inputName, inputAge, inputWeight, inputRetired, inputNationality, inputOscarNumber, inputProfession);

const fs = require('fs');
let data = JSON.parse(fs.readFileSync('imdbBBDD.json', 'utf-8'));



 
// Wait for user's response.
// let userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
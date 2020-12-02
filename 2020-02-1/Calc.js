//Run from Command Line with the following command
//node [operating file] [referenced file]
//For this problem: node Calc.js Input.txt

//establishes reference file from 3 param in command line
var fileName = process.argv[2];

//Read file, pull contents into input as a single string
fs = require('fs');
var input = fs.readFileSync(fileName).toString();

//Create array of all sample values, separated by line breaks (still Strings)
var calcValues = input.split('\r\n');

console.log(calcValues);
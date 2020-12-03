//Run from Command Line with the following command
//node [operating file] [referenced file]
//For this problem: node Calc.js Input.txt

//establishes reference file from 3 param in command line
var fileName = process.argv[2];

//Read file, pull contents into input as a single string
fs = require('fs');
var input = fs.readFileSync(fileName).toString();

//Create array of all sample values, separated by line breaks (still Strings)
var fillVals = input.split('\r\n');

//Initialize array for calculation
var calcVals = [];

//Values for loop
var n;
var counter = 0;

for (n of fillVals) {
    var tempVal = n;
    tempVal = tempVal.split(/-| |: /);
    
    calcVals[counter] = tempVal;

    counter = counter + 1;
}

console.log(calcVals);
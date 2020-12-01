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

//Empty variable for answer value (probably not necessary)
var answerVal = 0;

//Loop through all values in the input
var n;
loop1:
    for (n of calcValues) {
        //convert current array value into Integer
        var tempVal1 = parseInt(n, 10);
        var m;

//For every value in the Input, run another loop over all values in the input
loop2:
        for (m of calcValues) {
            //convert current array value into Integer
            var tempVal2 = parseInt(m, 10);

            //If the current values of both loops add up to 2020...
            if (tempVal1 + tempVal2 == 2020) {
                //Set answerVal equal to the product of the two numbers
                answerVal = tempVal1 * tempVal2;
                //and break both loops.
                break loop1;
            }
        }
    }

console.log("First value: ", n);
console.log("Second value: ", m);
console.log("Product of both values: ", answerVal);
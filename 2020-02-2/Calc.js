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

//Total passwords
var rightPass = 0;
var wrongPass = 0;

//Iterate over all provided passwords
for (n of fillVals) {
    
    //Make password requirements and password individual values
    var tempVal = n;
    tempVal = tempVal.split(/-| |: /);

    //Convert password requirements to array positions
    var sptOne = parseInt(tempVal[0], 10) - 1;
    var sptTwo = parseInt(tempVal[1], 10) - 1;

    //If the character at spot one is equal to the key character and the character at spot 2 is not (OR vice versa)...
    if ((tempVal[3].charAt(sptOne) == tempVal[2] && tempVal[3].charAt(sptTwo) != tempVal[2]) 
    || (tempVal[3].charAt(sptOne) != tempVal[2] && tempVal[3].charAt(sptTwo) == tempVal[2])) {
        
        //Establish password as conforming and increment total conforming passwords by 1
        tempVal[4] = "Conforming";
        rightPass = rightPass + 1;

    //Otherwise    
    } else {

        //Establish password as non-conforming and increment total non-conforming passwords by 1
        tempVal[4] = "Non-conforming";
        wrongPass = wrongPass + 1;
    }

    //Add the calculated password values to final array
    calcVals[counter] = tempVal;

    //Increment the loop counter
    counter = counter + 1;
}

//Output variables
console.log(calcVals);
console.log("Total correct passwords: ", rightPass);
console.log("Total incorrect passwords: ", wrongPass);
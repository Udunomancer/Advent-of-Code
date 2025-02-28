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

    //Variable to collect total number of key character
    var ruleCounter = 0;

    //Loop over the password string
    for (i=0; i < tempVal[3].length; i++) {
        
        //If the current character in the password matches the key character
        if (tempVal[3].charAt(i) == tempVal[2]) {
            
            //Increment the counter by 1
            ruleCounter = ruleCounter + 1;
        }
    }

    //If the total number of key charcters conforms to the password rules
    if (ruleCounter >= tempVal[0] && ruleCounter <= tempVal[1]) {
        
        //Establish it as a conforming password and increment total correct passwords by one
        tempVal[4] = "Conforming";
        rightPass = rightPass + 1;
    
    //Else   
    } else {

        //Establish it as a non-conforming password and increment total incorrect passwords by one 
        tempVal[4] = "Non-conforming"
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
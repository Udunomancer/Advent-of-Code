//===Get Input===
var fileName = process.argv[2];
fs = require('fs');
var input = fs.readFileSync(fileName).toString();
var calcValues = input.split('\r\n');
//===Get Input===
var bagObjects = [];
var counter = 0;
var n;
for (n of calcValues) {
    bagObjects[counter] = n.split(/ bags contain | |, /);
    counter++;
}

console.log(bagObjects);
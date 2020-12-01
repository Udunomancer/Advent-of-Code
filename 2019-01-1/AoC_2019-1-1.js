var fileName = process.argv[2];

fs = require('fs');
var input = fs.readFileSync(fileName).toString();

var calcValues = input.split('\r\n');
var sumValues = 0;

var n;
for (n of calcValues) {
  var tempVal = parseInt(n, 10);
  tempVal = Math.floor(tempVal/3) - 2;
  sumValues += tempVal;
}

console.log(sumValues);
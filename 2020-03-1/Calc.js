//===Get Input===
var fileName = process.argv[2];
fs = require('fs');
var input = fs.readFileSync(fileName).toString();
var calcValues = input.split('\r\n');
//===Get Input===

counter = 0;
treesHit = 0;
checkVals = [];
checkCounter = 0;

for (n of calcValues) {
    if (n.charAt(counter % 31) == "#") {
        n = [n, "Tree Hit"];
        treesHit = treesHit + 1;
    } else {
        n = [n, "Clear"];
    }
    
    checkVals[checkCounter] = n;

    checkCounter = checkCounter + 1;
    counter = counter + 3;
}

console.log(checkVals);
console.log(treesHit);
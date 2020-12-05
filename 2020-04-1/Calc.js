//===Get Input===
var fileName = process.argv[2];
fs = require('fs');
var input = fs.readFileSync(fileName).toString();
var calcValues = input.split('\r\n\r\n');
//===Get Input===

var n;
var passports = [];
var goodPassports = 0;
var badPassports = 0;
var counter = 0;

for (n of calcValues) {
    passports[counter] = new Passport(n);
    passports[counter].validPassport();
    if (passports[counter].valid) {
        goodPassports++;
    } else {
        badPassports++;
    }
    
    counter++;
}

console.log(passports);
console.log("Total Valid Passports: ", goodPassports);
console.log("Total Invalid Passports: " , badPassports);

//Passport Object Constructor
function Passport(string) {
    var tempFor = string.split(/\r\n| /);
    var m;
    for (m of tempFor) {
        var tempFor2 = m.split(':');
        this[tempFor2[0].trim()] = tempFor2[1].trim();
    }
    this.validPassport = function() {
        if (this.byr && this.iyr && this.eyr && this.hgt
             && this.hcl && this.ecl && this.pid) {
                this.valid = true;
        } else {
            this.valid = false;
        }
    }
}
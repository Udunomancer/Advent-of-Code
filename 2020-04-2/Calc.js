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
        if (this.validByr && this.iyr && this.eyr && this.hgt
             && this.hcl && this.ecl && this.pid) {
                this.valid = true;
        } else {
            this.valid = false;
        }
    }

    this.validByr = function() {
        if (parseInt(this.byr) >= 1920 && parseInt(this.byr) <= 2002) {
            return true;
        } else {
            return false;
        }
    }

    this.validIyr = function() {
        if (parseInt(this.iyr) >= 2010 && parseInt(this.iyr) <= 2020) {
            return true;
        } else {
            return false;
        }
    }

    this.validEyr = function() {
        if (parseInt(this.eyr) >= 2020 && parseInt(this.eyr) <= 2030) {
            return true;
        } else {
            return false;
        }
    }

    this.validHgt = function() {

    }

    this.validHcl = function() {

    }

    this.validEcL = function() {

    }

    this.validPid = function() {

    }
}
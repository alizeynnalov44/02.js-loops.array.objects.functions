//1.
function ededinCemi(eded) {
    var yuzluk = parseInt(eded/ 100);
    var onluq = parseInt(eded % 100 / 10);
    var birlik = eded % 10;
    var cem = yuzluk + onluq + birlik;
    return cem;
}

function ededinHasil() {
    var yuzluk = parseInt(eded/ 100);
    var onluq = parseInt(eded % 100 / 10);
    var birlik = eded % 10;
    var hasil = yuzluk * onluq * birlik;
    return hasil;
}

function ededinOrta(eded) {
    var yuzluk = parseInt(eded/ 100);
    var onluq = parseInt(eded % 100 / 10);
    var birlik = eded % 10;
    var orta = (yuzluk + onluq + birlik) /3;
    return orta;
}
var eded =345;
var cem = ededinCem(eded)
var hasil = ededinHasil(eded)
var orta = ededinOrta(eded)
console.log(cem);
console.log(hasil);
console.log(orta);

function findDivisors(number) {
    var divisors = [];
    for (var i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

function printDivisors(divisors) {
    console.log("Ədədin bölənləri:");
    for (var i = 0; i < divisors.length; i++) {
        console.log(divisors[i]);
    }
}
var num = 24
var divisors = findDivisors(num);
printDivisors(divisors);

function countDivisors(number) {
    var count = 0;
    for (var i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }
    return count;
}

var num = 24; 
var divisorCount = countDivisors(num);
console.log("Ədədin bölənlərinin sayı: " + divisorCount);


for (var i = 0; i <= 10; i++) {
    var result = i * i;
    console.log(i + " x " + i + " = " + result);
}



for (var i = 0; i <= 10; i++) {
    var iKavadrat = i * i;
    var iKub = i * i * i;
    console.log(i + "    " + iKvadrat + "    " + iKub);
}

var tekCemi = 0;
var cutCemi = 0;

for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        cutCemi += i;
    } else {
        tekCemi += i;
    }
}

console.log( tekCemi);
console.log( cutCemi);


let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];
let filteredCountries = [];

for (const country of countries) {
    if (country.toLowerCase().startsWith("a") && country.toLowerCase().endsWith("a")) {
        filteredCountries.push(country);
    }
}

console.log( filteredCountries);
function findNumberOfDivisors(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
}

console.log(findNumberOfDivisors(24)); 


function printFullName(firstName, lastName) {
    if (firstName && lastName) {
        return "I am John Doe";
    } else {
        return "I am " + firstName + " " + lastName;
    }
}

console.log(printFullName("jhon", "doe"));


function sumArrayElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}


function sumArrayElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}


const numbers = [1, 2, 3, 4, 5];
console.log( sumArrayElements(numbers));



/*function reqemleriEyniOlanEdedler() {
   
    for (let i = 10; i <= 99; i++) {
    
        let ededStr = i.toString();

       
        if (ededStr[0] === ededStr[1]) {
            console.log(i);
        }
    }
}


reqemleriEyniOlanEdedler(); */

/*function maxKombinasiya(eded) {
    
    let ededStr = eded.toString();

    
    let rəqəmlər = ededStr.split("").map(Number);
    rəqəmlər.sort((a, b) => b - a);

   
    let maxKombinasiya = parseInt(rəqəmlər.join(""));

    return maxKombinasiya;
}


let input1 = 253;
let output1 = maxKombinasiya(input1);
console.log("input1:", input1);
console.log("output1:", output1); */



/*function sozSayi(cumle) {
    
    let kelimeler = cumle.split(" ");

  
    return kelimeler.length;
}


let cumle = "Bu bir nümunə cümlədir.";
let sozlerinSayi = sozSayi(cumle);
console.log("Cümlədəki sözlərin sayı:", sozlerinSayi);*/

/*
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];

function ilkUcHerf(arr) {
    let yeniArray = [];
    for (let i = 0; i < arr.length; i++) {
        let country = arr[i];
        let ilkUcHerf = country.slice(0, 3).toUpperCase();
        yeniArray.push(ilkUcHerf);
    }
    return yeniArray;
}

let yeniArray = ilkUcHerf(countries);
console.log(yeniArray); */







/*function charIndekslerininCemi(string, char) {
    let cem = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            cem += i + 1; 
        }
    }
    if (cem === 0) {
        return -1; 
    } else {
        return cem;
    }
}


console.log(charIndekslerininCemi("salam", "a")); 
console.log(charIndekslerininCemi("salam", "b")); */

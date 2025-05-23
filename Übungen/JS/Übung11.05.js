const data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let gerade = 0;
let ungerade = 0;

for (let i = 0; i < data2.length; i++) {
    if (data2[i] % 2 =  = 0) {
        gerade += data2[i];
    } else {
        ungerade += data2[i];
    }
}

const result = ungerade;

console.log("Ergebnis ungerade Zahlen", result);

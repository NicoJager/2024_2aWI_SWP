

function sumOfEvenNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }
    return sum;
}

// Einlesen der Eingabe
let input = prompt("Geben Sie Zahlen ein (getrennt durch Leerzeichen):");
let numbers = input.split(" ").map(Number);

// Berechnung und Ausgabe
console.log("Summe der geraden Zahlen:", sumOfEvenNumbers(numbers));

//lg nico
// Inspiriert von CHATGPT
function sumOfEvenNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (Number(numbers[i]) % 2 == 0) {
            sum += Number(numbers[i]);
        }
    }
    return sum;
}

let input = "1 2 3 4 5 6 7 8 9";
let numbers = input.split(" ");

console.log("Summe der geraden Zahlen:", sumOfEvenNumbers(numbers));

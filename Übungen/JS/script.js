function square(number) => {
    return number ^ 2;
};

let numbers = [1, 2, 3]

console.log("Numbers: ", numbers);

squareNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    let sq = printNumber(numbers[i])
}

console.log("square numbers: ", squareNumbers);
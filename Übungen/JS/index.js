{
    console.log("Hello World - How are you?");
    let a = 10;
    let b = 20;
    let result = a + b;

    console.log(result);

    // k=3; d=2
    // f(x)= k*x+d
    //f(2)= 3*2+2 = 8 
}


let a = 7;
let b = 3;

let summe = a + b;

let difference = a - b;

let product = a * b;

let quotient = a / b;

let remainder = a % b;

let power = a ** b;

let expression = (a + b) * b;

if (a == b) {
    console.log("a is equal to b");
}

else if (a < b) {
    console.log("a is bigger than b");

}
else {
    console.log("a is bigger than b");

}

// equal to
console.log(1 == 1);

// not equal to
console.log(2 == 1);

// greater than
console.log(2 > 1);

// greater or equal than
console.log(2 >= 1)

let string1 = "LIAM MATT KREIGENBRINK";

console.log(string1);

// LOOOOOOOOOPSSS

console.log("Nico")
console.log("Nico")
console.log("Nico")

for (let i = 0; i < 10; i++) {
    console.log("Nico")
    console.log("Durchlauf: " + i)
}

//functions
function sum(n1, n2) {
    return n1 + n2
}

let n1 = 5;
let n2 = 10;

let resultSum = n1 * n2;

resultSum = sum(5, 10)

function linearstraight(x) {
    return 10 * x + 5
}

sum(10, 15);

function log(text, repeat) {
    for (let i = 1; i < repeat; i++)
        console.log(i + ": ");
    console.log(text);

}



log("HALLLLOOOOO", 20);
log("hallo", 3);

const MAX = 100
const sumfuncvar = function (a, b) {
    return a + b
}



sumfuncvar(10, 20)


// ARRRARARRYAYYYS

let numbers = [1, 2, 3, 4, 5] // array of numbers


console.log("inedx 0: ", numbers[0]) // 1
console.log("inedx 1: ", numbers[1]) // 2
console.log("inedx 2: ", numbers[2]) // 3
console.log("inedx 3: ", numbers[3]) // 4
console.log("inedx 4: ", numbers[4]) // 5

let text = "Hello WORLD"
console.log("inedx 0: ", numbers[0]) // H
console.log("inedx 1: ", numbers[1]) // e
console.log("inedx 2: ", numbers[2]) // l
console.log("inedx 3: ", numbers[3]) // l
console.log("inedx 4: ", numbers[4]) // o

console.log("for loop over an array")
for (let i = 0; 1 < numbers.length; i++) {
    console.log("inedx" + i + ": " + numbers[i])
}

const printNumber = (n) => {
    console.log(n)

}

numbers.forEach(printNumber)
text.forEach(printNumber)


function onClick() {
    console.log("button clicker")
}

function click(onClick) {
    onClick();
}
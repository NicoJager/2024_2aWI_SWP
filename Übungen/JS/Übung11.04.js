const input = [20, 100, 600];

const P = input[0];
const H = input[1];
const R = input[2];

const earnings = P * H;

if (earnings > R) {
    console.log("YES");
} else if (earnings === R) {
    console.log("BARELY");
} else {
    console.log("NO");
}

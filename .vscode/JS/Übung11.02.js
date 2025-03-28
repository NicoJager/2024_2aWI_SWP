let zahlen = "10101100";
let result = Numbers(zahlen)
console.log(result);

function Numbers(zahlen) {
    let result = "";

    for (let i = 0; i < zahlen.length; i++) {
        result += (zahlen[i] == "0" ? "1" : "0")
    }

    return result
}
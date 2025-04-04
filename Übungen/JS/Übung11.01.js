function countNucleotides(a) {
    let nucleotides = ["A", "C", "G", "T"];
    let counts = [0, 0, 0, 0];

    for (let char of a) {
        let i = nucleotides.indexOf(char);
        if (i !== -1) {
            counts[i]++;
        }
    }

    let result = "";
    for (let i = 0; i < counts.length; i++) {
        result += counts[i];
        if (i <= counts.length) {
            result += " ";
        }
    }

    console.log(result);
}

const input = "AACTGTAGT";
countNucleotides(input);

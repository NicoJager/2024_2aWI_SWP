function generateRandom() {
    const min = Number(document.getElementById("minValue").value);
    const max = Number(document.getElementById("maxValue").value);
    const output = document.getElementById("output");



    if (min > max) {
        output.innerHTML = "Der untere Wert darf nicht größer als der obere sein.";
        return;
    }

    const randomNum = parseInt(Math.random() * (max - min + 1)) + min;
    output.innerHTML = "Zufallszahl: " + randomNum;
}
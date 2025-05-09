function closestToZero(temperatures) {

    let closest = temperatures[0];
    for (let i = 1; i < temperatures.length; i++) {
        let temp = temperatures[i];
        let absTemp = temp < 0 ? -temp : temp;
        let absClosest = closest < 0 ? -closest : closest;

        if (absTemp < absClosest) {
            closest = temp;
        }
    }
    return closest;
}

const temps = [-5, 5, 0, 2, -8, 8, 3];
console.log(closestToZero(temps)); 

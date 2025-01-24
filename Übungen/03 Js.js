let banana = "Banana"
let apple = "Apple"

let bananapriceperkg = 2.14
let applepriceperkg = 3.43

let bananaweight = 0.34
let appleweight = 0.22



let priceperbanana = bananapriceperkg * bananaweight
let priceperapple = applepriceperkg * appleweight

console.log("Preis für 8 Äpfel: " + priceperapple * 8 + "€")
console.log("Preis für 17 Bananen: " + priceperbanana * 17 + "€")

console.log("Preis für 1 Tonne Äpfel: " + applepriceperkg * 1000 + "€")
console.log("Preis für 1 Tonne Bananen: " + bananapriceperkg * 1000 + "€")
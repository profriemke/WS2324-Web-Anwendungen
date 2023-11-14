const auto = {
    marke: "Daimler",
    modell: "Ultra45",
    kw: 520,
}
auto.kw = 600;
console.log(auto.kw);

const lkw = {
    marke: "Volvo",
    modell: "Lasti33",
    kw: 800
}

console.log(lkw.kw);

const fahrzeuge = [auto, lkw];

console.log(fahrzeuge[0].kw);
console.log(fahrzeuge[1].kw);

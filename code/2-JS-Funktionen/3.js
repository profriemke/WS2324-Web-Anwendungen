let hallo = function (gruss, name) {
    console.log(gruss + ' ' + name);
}

let gutenTag = function (name, fn) {
    fn('Guten Tag', name);
}

gutenTag('Horst', hallo);




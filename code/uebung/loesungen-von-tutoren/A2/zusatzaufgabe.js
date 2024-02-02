for (let i = 1; i <= 100; i++) {
    let word = "";
    let num = i.toString();
    for (let j = 0; j < num.length; j++) {
        switch (num[j]) {
            case "0":
                word += "null";
                break;
            case "1":
                word += "eins";
                break;
            case "2":
                word += "zwei";
                break;
            case "3":
                word += "drei";
                break;
            case "4":
                word += "vier";
                break;
            case "5":
                word += "fünf";
                break;
            case "6":
                word += "sechs";
                break;
            case "7":
                word += "sieben";
                break;
            case "8":
                word += "acht";
                break;
            case "9":
                word += "neun";
                break;
            default:
                break;
        }
    }
    console.log(word);
}

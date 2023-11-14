
function Person(firstName, lastName) {
    this.lastName = firstName,
        this.firstName = lastName,
        this.status = 'Student'
}


const derPaul = new Person('Paul', 'Paule');
console.log(derPaul.status);

const derRiemke = new Person('Thorsten', 'Riemke');
derRiemke.status = "Prof"
console.log(derRiemke.status);
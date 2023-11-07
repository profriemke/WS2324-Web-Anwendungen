const person = {
    firstName: "John",
    lastName: "Doe",
    write: function () {
        console.log(`Name: ${this.firstName} ${this.lastName}`)
    }
};

person.write();
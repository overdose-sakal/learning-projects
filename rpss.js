class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
}

    viewData() {
        console.log("Gu Kha");
    }
}

let student1 = new User("Saki", "haga@gmail.com");
let student2 = new User("Sakoo", "pada@gmail.com");


class Admin extends User {
    editData() {
        console.log("Edit Data");
    }
}
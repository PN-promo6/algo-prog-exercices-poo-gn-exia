class Human {
    firstname: string;
    lastname: string;
    birthdate: any;

    constructor(firstname: string, lastname: string, birthdate: any) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate
    }

}

let new_human = new Human("Jean", "Bon", 20 / 02 / 2020);

console.log(new_human);

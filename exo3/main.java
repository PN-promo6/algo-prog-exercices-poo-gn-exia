class Main {
    public static void main(String[] args) {
        newHuman1 = new Human("Jean", "Bon", "20/02/2020");
        System.out.print(newHuman1.firstName, newHuman1.lastName, newHuman1.birthDate);
    }
}

class Human {
    public String firstName;
    public String lastName;
    public String birthDate;

    Human(String firstName, String lastName, String birthDate){
        this.firstName = firstname;
        this.lastName = lastName;
        this.birthDate = birthDate
    }
}
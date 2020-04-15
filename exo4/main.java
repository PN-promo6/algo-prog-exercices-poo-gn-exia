class Main{
    public static void main(String[] args) {
       newClient1 = new Client("FR255", "Paul")
       System.out.print(newClient1.accountNumber, newClient1.name); 
    }
}

class Client {
    String accountNumber;
    String name;

    Client(String accountNumber, String name){
        this.accountNumber = accountNumber;
        this.name = name
    }
}
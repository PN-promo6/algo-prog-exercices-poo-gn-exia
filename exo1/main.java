class Main {
    class public static void main(String[] args) {
    Book newBook1 = new Book("Le petit poucet", 9.99)
    System.out.print(newBook1.bookName, newBook1.bookPrice);
    }
}

class Book {
   String bookName;
   int bookPrice;

   Book(String bookName, int bookPrice){
       this.bookName = bookName;
       this.bookPrice = bookPrice;
   }
}
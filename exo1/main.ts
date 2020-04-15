class Book {
    bookName: string;
    bookPrice: number;

    constructor(bookName: string, bookPrice: number) {
        this.bookName = bookName,
            this.bookPrice = bookPrice;
    }
}

let book01 = new Book("le petit poucet", 9.99)

console.log(book01)

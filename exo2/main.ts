
class Furniture {
    editor: string;
    designer: string;
    conception_year: number;

    constructor(editor: string, designer: string, conception_year: number) {
        this.editor = editor,
            this.designer = designer,
            this.conception_year = conception_year;
    }
}

let wassily_chair = new Furniture("Knoll", "Marcel Breuer", 1925)

console.log(wassily_chair);

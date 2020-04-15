class Main {
    public static void main(String[] args) {
    newFurniture1 = new Furniture("Knoll", "Marcel Breuer", 1925)
    System.out.print(newFurniture1.editor, newFurniture1.designer, newFurniture1.conceptionYear)
    }
}

class Furniture {
    String editor;
    String designer;
    int conceptionYear;

    Furniture(String editor, String designer, int conceptionYear){
        this.editor = editor;
        this.designer = designer;
        this.conceptionYear = conceptionYear;
    }
}
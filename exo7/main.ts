abstract class Item {
    name: string;
    size: number;

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }
}

class Teleporter extends Item {
    energy: number;

    constructor(name: string, energy: number) {
        super(name, 3);
        this.energy = energy;
    }
}

class Arrow extends Item {
    power: number;

    constructor(name: string, power: number) {
        super(name, 1);
        this.power = power
    }
}

class Player {
    name: string;
    sizeUsed: number;
    life: number;
    inventory: Array<Item>

    constructor(name: string) {
        this.life = 3;
        this.inventory = new Array<Item>();
    }

    pushItem(item: Item): boolean {
        let pushed: boolean;
        if (this.sizeUsed + item.size < 9) {
            console.log(item.name + "à été ajouté a votre inventaire");
            this.inventory.push(item);
            return true;
        }
        console.log("Votre inventaire est plein");
        return false;
    }
}
}
let firstTeleporter: Teleporter = new Teleporter("Hard-light Teleporter", 300);
let secondTeleporter: Teleporter = new Teleporter("Shadowstep", 600);

let firstArrow: Arrow = new Arrow("Ryu", 100);
let secondArrow: Arrow = new Arrow("Okami", 200);

let newPlayer: Player = new Player("DPSnoob");

newPlayer.pushItem(firstTeleporter);
newPlayer.pushItem(firstTeleporter);
newPlayer.pushItem(secondTeleporter);

newPlayer.pushItem(secondArrow);
newPlayer.pushItem(firstArrow);

console.log(newPlayer);
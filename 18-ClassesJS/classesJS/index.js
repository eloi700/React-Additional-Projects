class Character {
    // if you need to initialize values when creating the object, you must include a CONSTRUCTOR
    constructor(initialHP=100){
        this.hp = initialHP
    }

    // If you will always initialize an instance with a hard-coded value, you can declare that without a constructor.
    alive = true;

    // I can refer to the object calling this method as "this" and therefore can access and update the properties of this object with,
    // e.g., `this.hp = ...`
    updateHP(amount){
        const calc = this.hp + amount;
        if(calc <= 0){
            // Trying to avoid any character having a negative amount of HP
            this.hp = 0;
            this.alive = false
        } else {
            this.hp = calc
        }
        }
    }

const char = new Character(100)
console.log(char.hp);
char.updateHP(100);
console.log(char.hp);

class Enemy extends Character{
    constructor(hp, lootToDrop){
        super(hp)
        this.lootToDrop = lootToDrop
    }
}

class Hero extends Character{
    constructor(hp){
    super(hp)
}
inventory = []

defeatEnemy(enemy){
    if(enemy.lootToDrop){
        this.inventory.push(enemy.lootToDrop)
    }
    enemy.updateHP(enemy.hp * -1)
}
}

const enemy = new Enemy(100, "Sword of a Thousand Truths")
const me = new Hero(100);

console.log(me.hp);
console.log(me.alive);
me.updateHP(50)
console.log(me.hp)

me.defeatEnemy(enemy);

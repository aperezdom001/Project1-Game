

// NODE ELEMENTS //

const startButton = document.querySelector("button");
const dreamButton = document.querySelector("button");
const nightmareButton = document.querySelector("button");
const giveUpButton = document.querySelector("button");

// GLOBAL VARIABLES //

// CLASSES //

class userPlayer{
    constructor(name){
        this.name = name;
        this.playerHealth = 50;
        this.dreamPower = 10;
        this.nightmarePower = 5;
    }


    dreamAttack(enemy){
        console.log("Dream attack!");
    }
    
    nightmarePower(enemy){
        console.log("Nightmare attack!");
    }

}



class compEnemy {
    constructor(name){
        this.name = name;
        this.enemyHealth = enemyHealth;
        this.enemyPower = enemyPower;
        
    }

    enemyAttack(player){
        console.log("Enemy attack!");
    }
}

const player1 = new userPlayer ("Alex");

// FUNCTIONS //

// EVENT LISTENERS //


// Testing Code //
// console.log("uno, dos, tres, si, si");
// console.log("Te quiero mucho");
//alert("Does this work?");

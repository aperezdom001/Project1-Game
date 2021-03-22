alert("Does this work?");

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


    dreamAttack(){
        console.log("Dream attack!");
    }
    
    nightmarePower(){
        console.log("Nightmare attack!");
    }

}



class compEnemy {
    constructor(name){
        this.name = name;
        this.enemyHealth = enemyHealth;
        this.enemyPower = enemyPower;
        
    }

    enemyAttack(){
        console.log("Enemy attack!");
    }
}

const player = new userPlayer ("Alex");

// FUNCTIONS //

// EVENT LISTENERS //

// console.log("uno, dos, tres, si, si");
// console.log("Te quiero mucho");

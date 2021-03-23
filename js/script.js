

// NODE ELEMENTS //

const startButton = document.querySelector("button");
const dreamButton = document.querySelector("button");
const nightmareButton = document.querySelector("button");
const giveUpButton = document.querySelector("button");

// GLOBAL VARIABLES //

let score = 0;

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
        enemy.health = this.dreamPower - enemy.health;
        console.log(enemy.health);
    }
    
    nightmarePower(enemy){
        console.log("Nightmare attack!");
        enemy.health = this.nightmarePower - enemy.health;
        console.log(enemy.health);
    }

}



class compEnemy {
    constructor(name){
        this.name = name;
        this.enemyHealth = 15;
        this.enemyPower = 3;
        
    }
 
    enemyAttack(player){  //for now, add the type of orbs later 
        console.log("Enemy attack!");
        player.health = this.enemyPower - player.health;
        console.log(player.health);
    }
}

const player1 = new userPlayer ("Alex");
const enemy1 = new compEnemy("Enemy 1");

console.log(player1);
console.log(enemy1);

player1.dreamAttack(enemy1);
console.log(player1.dreamAttack(enemy1));

// FUNCTIONS //

const startGame = () => {
    console.log("Start!!");
}

const scoreUpdate = () => {
    for(let i = 0; i < 0; player1.playerHealth++){
        return player1.playerHealth;
       
    }
    console.log("SCORE: " + score);
}

const gameOver = () => {
    console.log("Whoops, game over.");

}


// EVENT LISTENERS //


// Testing Code //
// console.log("uno, dos, tres, si, si");
// console.log("Te quiero mucho");
//alert("Does this work?");

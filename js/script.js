

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
    
    nightmareAttack(enemy){
        console.log("Nightmare attack!");
        enemy.health = this.nightmarePower - enemy.health;
        console.log(enemy.health);
    }

}



class compEnemy {
    constructor(name){
        this.name = name;
        this.enemyHealth = 15;
        this.enemyPower = 8;
        
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

enemy1.enemyAttack(player1);
console.log(enemy1.enemyAttack(player1));

// FUNCTIONS //

const startGame = () => {
    console.log("Start!!");
}

const scoreUpdate = () => { //a little confused, but it's ok
    for(let i = 0; i < 0; player1.playerHealth++){
        return player1.playerHealth;
       
    }
    console.log("SCORE: " + score);
}

const giveUp = () => { //ask questionxs
    const giveAlert = prompt("Your health is " +
    player1.playerHealth + ". Do you want to give up?");
    if(player1.playerHealth <= 15){
        giveAlert;
    } else if (giveAlert === "yes"){
        const yesPrompt = alert ("Oh no! You became an evil creature and will forever haunt those tho run into you...");
        yesPrompt;
    }else if (giveAlert === "no"){
        const noPrompt = alert ("Keep fighting!!! Don't lose hope.");
        noPrompt;
    }
}

const gameOver = () => {
    if(player1.health <= 0){
        const overAlert = alert("Oh no! You became an evil creature and will forever haunt those tho run into you...");
        return overAlert;
    }
    console.log("Whoops, game over.");

}

startGame();
console.log(startGame());

scoreUpdate();
console.log(scoreUpdate());

giveUp();
console.log(giveUp());

gameOver();
console.log(gameOver());


// EVENT LISTENERS //

startButton.addEventListener("click", startGame());
dreamButton.addEventListener("click", player1.dreamAttack());
nightmareButton.addEventListener("click", player1.nightmareAttack());
giveUpButton.addEventListener("click", giveUp());


// Testing Code //
// console.log("uno, dos, tres, si, si");
// console.log("Te quiero mucho");
//alert("Does this work?");

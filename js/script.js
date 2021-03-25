

// NODE ELEMENTS //

const startButton = document.querySelector("#start");
const dreamButton = document.querySelector("#dream");
const nightmareButton = document.querySelector("#nightmare");
const giveUpButton = document.querySelector("#give-up");
const scoreBoard = document.querySelector("#score");

// GLOBAL VARIABLES //

let score = 0;
let rounds = 1;

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
        enemy.enemyHealth =  enemy.enemyHealth - this.dreamPower;
        console.log(enemy.enemyHealth);
    }
    
    nightmareAttack(enemy){
        console.log("Nightmare attack!");
        enemy.enemyHealth =   enemy.enemyHealth - this.nightmarePower;
        console.log(enemy.enemyHealth);
    }

}



class compEnemy {
    constructor(name){
        this.name = name;
        this.enemyHealth = 25;
        this.enemyPower = this.enemyPower;
        
    }
 
    enemyAttack(player){  //for now, add the type of orbs later 
        console.log("Enemy attack!");
        player.playerHealth = player.playerHealth - this.enemyPower;
        console.log(player.playerHealth);
    }
}

const player1 = new userPlayer ("Alex");
const enemy1 = new compEnemy("Enemy 1", 3);
const enemy2 = new compEnemy("Enemy 2", 6)


// console.log(player1);
 console.log(enemy1);
 console.log(enemy2);

// player1.dreamAttack(enemy1);
// console.log(player1.dreamAttack(enemy1));

// enemy1.enemyAttack(player1);
// console.log(enemy1.enemyAttack(player1));

// FUNCTIONS //

const startGame = () => {
    console.log("Start!!");
}

//notes: reach a certain amount in your score to go to the next round
const theRounds = (nextRound = 1) => {
    while(score >= 5){
        rounds =+ nextRound;
        //Round two begins
       // console.log("Round2");
       if(score >=15){
           //Round three
           rounds =+ nextRound;
       }
       else if (score>=25){
           //round four
           rounds =+ nextRound;
       }
    }
}

const scoreUpdate = (points = 0) => { 
    score+= points;
    console.log("SCORE: " + score);
    scoreBoard.innerHTML = score;
}

const giveUp = () => { //ask questionxs
    const giveAlert = prompt("Your health is " +
    player1.playerHealth + ". Do you want to give up? yes or no?");
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
    if(player1.playerHealth <= 0){
        const overAlert = alert("Oh no! You became an evil creature and will forever haunt those tho run into you...");
        return overAlert;
    }
    console.log("Whoops, game over.");

}

// EVENT LISTENERS //

startButton.addEventListener("click", startGame);
dreamButton.addEventListener("click", () =>{
    player1.dreamAttack(enemy1);
    scoreUpdate(5);
    enemy1.enemyAttack(player1);
});
nightmareButton.addEventListener("click", () => {
    player1.nightmareAttack(enemy1);
    player1.nightmareAttack(enemy2);
    scoreUpdate(8);
    enemy1.enemyAttack(player1);
    enemy2.enemyAttack(player1);
});
giveUpButton.addEventListener("click", () => {
    scoreUpdate(0);
});


// Testing Code //
// console.log("uno, dos, tres, si, si");
// console.log("Te quiero mucho");
//alert("Does this work?");

// startGame();
// console.log(startGame());

// scoreUpdate();
// console.log(scoreUpdate());

// giveUp();
// console.log(giveUp());

// gameOver();
// console.log(gameOver());

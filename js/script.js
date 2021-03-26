

// NODE ELEMENTS //

const startButton = document.querySelector("#start");
const dreamButton = document.querySelector("#dream");
const nightmareButton = document.querySelector("#nightmare");
const giveUpButton = document.querySelector("#give-up");
const scoreBoard = document.querySelector("#score");
const threeRounds = document.querySelector("#firstRound");
const pHealth = document.querySelector("#health");

// GLOBAL VARIABLES //

let score = 0;
let rounds = 1;

// CLASSES //

class userPlayer{
    constructor(name){
        this.name = name;
        this.playerHealth = 50;
        this.dreamPower = 8;
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
        this.enemyHealth = 45;
        this.enemyPower = Math.floor(Math.random() * 3 + 3);
        

        
    }
 
    enemyAttack(player){  
        player.playerHealth = player.playerHealth - this.enemyPower;
        console.log(player.playerHealth);
    }
}

const player1 = new userPlayer ("Alex");
const enemy1 = new compEnemy("Enemy 1");
const enemy2 = new compEnemy("Enemy 2");

 console.log(enemy1);
 console.log(enemy2);

// FUNCTIONS //

const startGame = () => {
    alert("Let's go!");
    console.log("Start!!");
}

//notes: reach a certain amount in your score to go to the next round
const theRounds = () => {
    if(score >= 25){
        rounds = 4;
        
    }else if(score >= 15){
        rounds = 3;
    }else if (score >= 5){
        rounds = 2;
    }

    threeRounds.innerHTML = rounds;

}

const scoreUpdate = (points = 0) => { 
    score+= points;
    console.log("SCORE: " + score);
    scoreBoard.innerHTML = score;
}

const giveUp = () => { 
    const giveAlert = prompt("Your health is " +
    player1.playerHealth + ". Do you want to give up? yes or no?");
    
     if (giveAlert === "yes"){
        alert ("Oh no! You became an evil creature and will forever haunt those tho run into you...");
        window.location.reload();
    }else if (giveAlert === "no"){
        alert ("Keep fighting!!! Don't lose hope.");
        noPrompt;
    }

  
}

const gameOver = () => {
    if(player1.playerHealth <= 0){
        alert("Oh no! You became an evil creature and will forever haunt those tho run into you...");
        console.log("Whoops, game over.");
        window.location.reload();
    } else if (score >= 30){
        alert("You did it! Now figure out how to get home!");
        console.log("You won!");
        window.location.reload();
    }   


}



// EVENT LISTENERS //

startButton.addEventListener("click", startGame);
dreamButton.addEventListener("click", () =>{
    player1.dreamAttack(enemy1);
    scoreUpdate(5);
    theRounds();
    enemy1.enemyAttack(player1);
    pHealth.innerHTML = player1.playerHealth;
    gameOver();
});
nightmareButton.addEventListener("click", () => {
    player1.nightmareAttack(enemy1);
    player1.nightmareAttack(enemy2);
    theRounds();
    scoreUpdate(8);
    enemy1.enemyAttack(player1);
    enemy2.enemyAttack(player1);
    pHealth.innerHTML = player1.playerHealth;
    gameOver();
});
giveUpButton.addEventListener("click", () => {
    giveUp(); 
});




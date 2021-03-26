# Unit1-Project1-Game


//// PROTECT TITLE: THE POWER OF DREAMS & NIGHTMARES ////

Synopsis: 
The player is transferred into a peculiar realm between dreams and 
nightmares one day in their sleep.  Player wakes up to creatures of
day and night chasing them with the intent to destroy them.

The player fights against these enemies by using their strongest dream (strength)
and nightmare (weakness) to defeat them.

There will be four rounds in total.
Dream Attack: less damage, but only one enemy attacks you.
Nightmare Attack: more damage, but two enemies attack you at the same time.

Use your dream and nightmare to your advantage to defeat them and then figure out
how you will need to ge home!


//// MOTIVATION ////

In this game, I wanted to create something I do not see very often in games. I like the action of using your weaknesses and not only your strengths as a way for the player/character to defend themselves and defeat whoever is in their way.

This idea came to my mind when looking at Ayame Kojima (well known for 
Castlevania art) and Yoshitaka Amano (well known for Final Fantasy art). 
These characters have a dream-like aura to them and when the player
gets to know them in the video game their strengths and weaknesses are shown
through their story, their personalities, and their powers. 

I wanted to portray something similar in this game using simple game mechanics.

//// CODE STYLE ////

I used JavaScript, CSS, and HTML to create this first project. My coding style 
was placing certain actions in order. For example, in my code you can see that I have everything in sections: NODE ELEMENTS, GLOBAL VARIABLES, CLASSES, FUNCTIONS, and finally EVENT LISTENERS. These sections have helped me shape my code that I organized in a separate Microsoft Excel spreadsheet. 

//// FEATURES ////

My browser is split into two screens displaying the instructions and the synopsis on the left side, and the gameplay components on the right-side. I was reminded of old computer games I would play as a child on the huge Windows computers and how the gameplay would look like. I have some images I created to make my game look unique to me, the creator. The four buttons on the bottom of the gameplay screen are START GAME, DREAM ATTACK, NIGHTMARE ATTACK, and GIVE UP that allow the player to commit action to the enemy or to reset the game with GIVE UP. 

//// CODE EXAMPLE ////

I am proud of this particular code because it displays how my code works as the player moves through the game: 

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
    
This was the time I felt excited that my buttons were clickable and were doing something!

//// INSTALLATION ////

There is no installation, but this is the link to play the game and to see
what I described above in this project with the knowledge I learned in my 
first three weeks of General Assembly's Software Engineering Immersive Program.

Link: https://pages.git.generalassemb.ly/aperezdom/Unit1-Project1-Game/

//// HOW TO USE ////

1. Click START GAME to start THE POWER OF DREAMS AND NIGHTMARES
2. Defeat your opponent with either DREAM ATTACK or NIGHTMARE ATTACK
    - DREAM ATTACK: less damage but only one enemy attacks you
    - NIGHTMARE ATTACK: more damage but two enemies attack you at the same time
3. Use this strategy to go through four rounds. 
    - When you think you might give up, click GIVE UP and it will will give you a choice if you want to end the game. If not, keep playing!


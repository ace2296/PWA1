/**
 * GUESSING GAME:
 *
 * Created By: Andre Guerra
 * Date: 04/17/14
 * 
 * GUESSING GAME
 */

//Game variables
(function ()

var playerGuess = 0;
var guessesMade = 0;
var guessesRemain = 3;
var gameState = 0;
	
var dom = {
	button: document.querySelector("#button")
    input: document.querySelector("#input"),
	output: document.querySelector("#ouput"),
};

//Generate random number to guess
var magicNum = Math.floor(Math.random()* 10 +1);

var clickFn = function(e){
	console.log(guessesRemain.input.value);
	validateInput();
};

// function to validate playersGuess
var validateInput = function(){
    playerGuess = parseInt(dom.input.value);

    if(isNaN(playerGuess)){
        dom.input.innerHTML = "Please enter a number:";

    } else if(playerGuess < 1 || playerGuess > 10){
        dom.input.innerHTML = "Please enter a number between 1 and 10";

    } else {
    	play();
    }

};

var play = function(){
	guessesMade++;
    guessesRemain--;
    gameState = "Guess: " + guessesMade + ", Remaining" + guessesRemain;

    playerGuess = parseInt(dom.input.value);

    if(playerGuess > magicNum){
        dom.output.innerHTML = "Your guess is too high. Please try again." + gameState;

    } else if(playerGuess < magicNum){
        dom.output.innerHTML = "Your guess is too low. Please try again" + gameState;

    } else if(playerGuess === magicNum){
        gameOver(true);
    }

    if(guessesRemain < 1){
    	console.log("Game Over : guessesRemaining is < 1");
        gameOver(false);
    }
};



})();
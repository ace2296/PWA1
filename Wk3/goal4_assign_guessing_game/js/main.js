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

var playersGuess = 0;
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
    playersGuess = parseInt(dom.input.value);

    if(isNaN(playersGuess)){
        dom.input.innerHTML = "Please enter a number:";

    } else if(playersGuess < 1 || playersGuess > 10){
        dom.input.innerHTML = "Please enter a number between 1 and 10";

    } else {
        playGame();
    }

};


})();
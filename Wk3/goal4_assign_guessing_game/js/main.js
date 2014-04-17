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

var magicNum = Math.floor(Math.random()* 10 +1);

var clickFn = function(e){
	console.log(guessesRemain.input.value);
	validateInput();
};


})();
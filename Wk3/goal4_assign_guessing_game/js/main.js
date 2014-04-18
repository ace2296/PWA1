/**
 * GUESSING GAME:
 *
 * Created By: Andre Guerra
 * Date: 04/17/14
 * 
 * GUESSING GAME
 */

//Game variables
(function() {

	var playerGuess = 0;
	var madeGuesses = 0;
	var remainingGuesses = 3;
	var status = "";
		
	var dom = {
		button: document.querySelector("#button"),
	    input: document.querySelector("#input"),
		output: document.querySelector("#ouput")
	};
	
	//Generate random number to guess
	var magicNum = Math.floor(Math.random()* 10 +1);
	//console.log (magicNum);
	
	//Adds functionality to the button
	dom.button.addEventListener("click",clickFn);
	
	//Disable button fuction
	function disableButton(){
		dom.button.removeEventListener("click", clickFn);
		//console.log("button is disabled");
	}
	
	function clickFn(){
		validate();
	};
	
	// function to validate playersGuess
	function validate(){
	    playerGuess = parseInt(dom.input.value);
	
	    if(isNaN(playerGuess)){
	        dom.input.innerHTML = "Please enter a number:";
	
	    } else if(playerGuess < 1 || playerGuess > 10){
	        dom.input.innerHTML = "Please enter a number between 1 and 10";
	
	    } else {
	    	play();
	    }
	
	};
	
	//play function to give result of the playerGuess
	function play(){
	    remainingGuesses--;
	    madeGuesses++;
	    status = "Guess: " + madeGuesses + ", Remaining" + remainingGuesses;
	
	    playerGuess = parseInt(dom.input.value);
	
	    if(playerGuess > magicNum){
	        dom.output.innerHTML = "Your guess is too high. Please try again." + status;
	
	    } else if(playerGuess < magicNum){
	        dom.output.innerHTML = "Your guess is too low. Please try again" + status;
	
	    } else if(playerGuess === magicNum){
	        dom.output.innerHTML = "Woohoo! You guessed the magic number: " + magicNum + " !" + "<br>"
	        + "It only took you " + madeGuesses + " guesses.";
	    }
	
	    if(remainingGuesses < 1){
	    	console.log("Game Over! You are out of guesses.");
	         dom.output.innerHTML = "No more guesses left! Better luck next time " + "<br>"
	        + "The magic number was " + magicNum;
	       
	       //Disable Button 
	        disableButton();
	    }
	};

})();
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

var random = ~~(Math.random() * 10 + 1),
    query = document.getElementById("input").value,
    result = document.getElementById("output"),
    guessButton = document.querySelector('button'),
    gameOver = false;
    counter = 3;

	console.log("Random number: ", random);
	 
 function button_click(event) {
   query = document.getElementById("input").value;
   
   if(isNaN(query)){
     output.innerHTML = "Please enter a number between 1 and 10";
   }

   if(query != "" && query > 0 && query < 11 && gameOver === false){
     var numEval = function(){
	     if(query === random){
	       output.innerHTML = "Congratulations! You guessed the correct number.";
	       gameOver = true;
	     }else if(query > random && counter == 1){
	       output.innerHTML = "Oops! Your guess was too high.";
	       counter--;
	     }else if(query != random && counter == 0){
	       output.innerHTML = "Game Over";
	       gameOver = true;
	     }else if(query < random && counter == 1){
	       output.innerHTML = "Eek! It looks like your guess was too low.";
	       counter--;
	     }else if(query > random){
	       counter--;
	       output.innerHTML = "The number you selected is too high. You have " + counter + " guesses left.";
	     }else if(query < random){
	       counter--;
	       output.innerHTML = "The number you selected is too low. You have " + counter + " guesses left.";
	     } 
   }();
   
   }else if(gameOver === true){
    output.innerHTML = "Please refesh your web browser to play again.";
    guessButton.removeEventListener('click', button_click, false);
   }
 }

 window.addEventListener('keyup', function(e){
   if(e.keyCode === 13){
     button_click();
   }
 }, false);

 guessButton.addEventListener('click', button_click, false);

})();
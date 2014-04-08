/*
Name: Guerra, Andre
Date: 3/6/14
Assignment: Goal1: Assignment: Duel1
*/

//self-executing function
(function () {
	console.log('Fight!');
	
	//player names
	var playerOneName = "Batman";
	var playerTwoName = "Superman";
	
	//player damage
	var playerOneHealth = 100;
	var playerTwoHealth = 100;
	
	//player health
	var playerOneDamage = 30;
	var playerTwoDamage = 30;
	
	//round
	var round = 0;
	
	function fight() {
		
		alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
		
		for(var i = 0; i < 10; i++){
			 //random formula is - Math.floor(Math.random() * (max - min) + min);
			 
			 var minDamage1 = playerOneDamage * .5;
			 var minDamage2 = playerTwoDamage * .5;
			 var f1 = Math.floor(Math.random()*(playerOneDamage-minDamage1)+minDamage1);
			 var f2 = Math.floor(Math.random()*(playerTwoDamage-minDamage2)+minDamage2);
			 
			 //console.log(f1);
			 //console.log(f2);
			 
			 //Inflict damage
			 playerOneHealth-=f1;
			 playerTwoHealth-=f2;
			 
			 //console.log(playerOneHealth);
			 //console.log(playerTwoHealth);
			 
			 console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);
			 
			 var result = winnerCheck();
			 console.log(result);
			 
			 if (result==="no winner") {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else {
                alert(result);
                break;
            };

		}
	};
	
	function winnerCheck(){
		 var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1) {
            result = "You Both Die";
        } else if(playerOneHealth<1) {
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1) {
            result = playerOneName+" WINS!!!"
        };
       return result;	
	};
	
	//Program Begins
	console.log('Program begins');
	fight();
	
})();
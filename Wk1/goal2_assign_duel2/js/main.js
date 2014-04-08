/*
Name: Guerra, Andre
Date: 4/3/14
Assignment: Goal 2 - Duel 2
*/

//self-executing function
(function () {
	console.log('Fight!');
	
	//player vars	
	var fighter1 = ["Batman", 100, 30];
	var fighter2 = ["Superman", 100, 30];
	
	//round
	var round = 0;
	
	function fight() {
		 
		alert(fighter1[0]+ ":"+ fighter1[1]+ "  *START*  " + fighter2[0] + ":" + fighter2[1]);
		
		for(var i = 0; i < 10; i++){
			 //random formula is - Math.floor(Math.random() * (max - min) + min);
			 
			 var minDamage1 = fighter1[2] * .5;
			 var minDamage2 = fighter2[2] * .5;
			 var f1 = Math.floor(Math.random()*(fighter1[2] - minDamage1)+minDamage1);
			 var f2 = Math.floor(Math.random()*(fighter1[2] - minDamage2)+minDamage2);
			 
			 //console.log(f1);
			 //console.log(f2);
			 
			 //Inflict damage
			 fighter1[1]-=f1;
			 fighter2[1]-=f2;
			 
			 //console.log(fighter1[1]);
			 //console.log(fighter2[1]);
			 
			 console.log(fighter1[0]+": "+fighter1[1] + " " + fighter2[0]+":"+fighter2[1]);
			 
			 var result = winnerCheck();
			 console.log(result);
			 
			 if (result==="no winner") {
                round++;
                alert(fighter1[0]+":"+fighter1[1]+"  *ROUND "+round+" OVER"+"*  "+fighter2[0]+":"+fighter2[1]);

            } else {
                alert(result);
                break;
            };

		}
	};
	
	function winnerCheck(){
		 var result="no winner";
        if (fighter1[1]<1 && fighter2[1]<1) {
            result = "You Both Die";
        } else if(fighter1[1]<1) {
            result =fighter2[0]+" WINS!!!"
        } else if (fighter2[1]<1) {
            result = fighter1[0]+" WINS!!!"
        };
       return result;	
	};
	
	//Program Begins
	console.log('Program begins');
	fight();
	
})();
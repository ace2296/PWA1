/*
Name: Guerra, Andre
Date: 3/21/14
Assignment: Goal 3 - Duel 2
*/

//self-executing function
(function () {
	console.log('Fight!');
	
	//player vars	
	var fighter1 = {name:"Batman", damage:100, health:30};
	var fighter2 = {name:"Superman", damage:100, health:30};
	
	//round
	var round = 0;
	
	document.getElementId('fight_btn').onclick.function fight() {
		 
		document.getElementById('round').setAttribute(fighter1['name']+ ":"+ fighter1['damage']+ "  *START*  " + fighter2['name'] + ":" + fighter2['damage']);
		
		//for(var i = 0; i < 10; i++){
			 //random formula is - Math.floor(Math.random() * (max - min) + min);
			 
			 var minDamage1 = fighter1['health'] * .5;
			 var minDamage2 = fighter2['health'] * .5;
			 var f1 = Math.floor(Math.random()*(fighter1['health'] - minDamage1)+minDamage1);
			 var f2 = Math.floor(Math.random()*(fighter1['health'] - minDamage2)+minDamage2);
			 
			 //console.log(f1);
			 //console.log(f2);
			 
			 //Inflict damage
			 fighter1['damage']-=f1;
			 fighter2['damage']-=f2;
			 
			 //console.log(fighter1['damage']);
			 //console.log(fighter2['damage']);
			 
			 console.log(fighter1['name']+": "+fighter1['damage'] + " " + fighter2['name']+":"+fighter2['damage']);
			 
			 var result = winnerCheck();
			 console.log(result);
			 
			 if (result==="no winner") {
                round++;
                document.getElementById('round').setAttribute(fighter1['name']+":"+fighter1['damage']+"  *ROUND "+round+" OVER"+"*  "+fighter2['name']+":"+fighter2['damage']);

            } else {
                document.getElementId('round').innerHTML((result));
                break;
            };

		}
	//};
	
	function winnerCheck(){
		 var result="no winner";
        if (fighter1['damage']<1 && fighter2['damage']<1) {
            result = "You Both Die";
        } else if(fighter1['damage']<1) {
            result =fighter2['name']+" WINS!!!"
        } else if (fighter2['damage']<1) {
            result = fighter1['name']+" WINS!!!"
        };
       return result;	
	};
	
	//Program Begins
	console.log('Program begins');
	fight();
	
})();
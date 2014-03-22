/*
Name: Guerra, Andre
Date: 3/21/14
Assignment: Goal 3 - Duel 2
*/

//self-executing function
(function () {

console.log("fight");

var fighter1_txt = document.querySelector("#kratos").querySelector("p");
var fighter2_txt = document.querySelector("#kabal").querySelector("p");
var round_txt = document.querySelector("h4");
var button = document.getElementById("fight_btn");

console.log();

button.onclick = fight;

var fighters = [
    {
        name: "Spiderman",
        damage: 20,
        health: 100
    },
    {
        name: "Batman",
        damage: 20,
        health: 100
    }];

var round = 1;

round_txt.innerHTML = "Click to start fight";
fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

function fight(){
    fighter1_txt.innerHTML = fighters[0].name + "." + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + "." + fighters[1].health;

    //determine damage
    var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);
    var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);

    //inflict damage
    fighters[0].health -= f1;
    fighters[1].health -= f2;

    //checkfor victor
    var result = winnerCheck();
    console.log(result);

    round_txt.innerHTML = "ROUND " + round + " complete";
    round++;

    if(result === "no winner"){
        fighter1_txt.innerHTML = fighters[0].name + "." + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name + "." + fighters[1].health;
    }else{
        fighter1_txt.innerHTML = result;
        fighter2_txt.innerHTML = "";

        button.onclick = "return false";
        document.querySelector('.buttonblue').innerHTML = "DONE!";
    }
}

function winnerCheck(){
    var result = "no winner";
    if(fighters[0].health < 1 && fighters[1].health < 1){
        result = "You both Die";
    }else if(fighters[0].health < 1){
        result = fighters[1].name + " Wins"
    }else if (fighters[1].health < 1){
        result = fighters[0].name + " Wins"
    }
    return result;
}

	
})();
let DoTheThing = function(){

    /*Loops have three parts - control variable, control boolean expression, control increment/decrement/update

        control variable - controls when loop executes

        control boolean expression - using the control variable which should evaluate to false

        control update - assigning a new value to the control variable INSIDE the loop
     */

    let restart = "Yes";
    while(restart === "Yes"){

        let computerNumber = Math.floor((Math.random()*10)+1);

        let playersguess = parseInt(prompt("Guess a number between 1 and 10"),10);

        while(playersguess !== computerNumber){
            if (playersguess > computerNumber){
                playersguess = parseInt(prompt("Too high, guess again"),10);
            }else
                playersguess = parseInt(prompt("Too low, guess again"),10);
        }
        alert("You guessed it");

        restart = prompt("Would you like to play ag ain? Type 'Yes' or 'No'(Case sensitive)");
    }
};

let DoTheOtherThing = function () {

    let restart;
    let playerGuess;
    do{
        let computerNumber = Math.floor((Math.random()*10)+1);
        do{
            let playersguess = parseInt(prompt("Guess a number between 1 and 10"),10);

        }while(playerGuess !== computerNumber);

        restart = prompt("Would you like to play ag ain? Type 'Yes' or 'No'(Case sensitive)");

    }while(restart === "Yes");

};
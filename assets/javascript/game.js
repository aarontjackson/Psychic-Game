 // create variables to store my values. Wins, Losses, userGuess, computerGuess, computerChoices
 var wins = 0;
 var losses = 0;
 var guessLeft = 9;
 var guessSoFar = [];
 var userGuess;
 var computerGuess;
 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var displayText = "Enter any Key to Start";


 // create function to display the results to the page DOM
 function updateDisplay() {
     document.querySelector("#displayText").innerHTML = displayText;
     document.querySelector("#wins").innerHTML = wins;
     document.querySelector("#losses").innerHTML = losses;
     document.querySelector("#guessLeft").innerHTML = guessLeft;
     document.querySelector("#guessSoFar").innerHTML = guessSoFar;
 };

 updateDisplay();

 // create a function to generate a random letter form the computerChoice array.
 function computerRandomLetter() {
     computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 }

 //create a function to reset the scores
 function resetScores(){
     guessLeft = 9;
     guessSoFar = [];
 }

 computerRandomLetter()
 console.log (computerGuess);

 //create onkeyup event function to grab userguess

 document.onkeyup = function(event) {

     userGuess = (event.key);
     console.log(userGuess);
     guessSoFar.push(userGuess);
     userGuess = event.key.toLowerCase();

     if (userGuess === computerGuess){
         wins++;
         guessLeft = 9;
         guessSoFar = [];
         computerRandomLetter();
         document.querySelector("#wins").innerHTML = wins;
     }  
     
     if (userGuess != computerGuess){
         guessLeft--;
     }

     if (guessLeft == 0){
         losses++;
         guessSoFar = [];
         guessLeft = 9;
         document.querySelector("#guessLeft").innerHTML = guessLeft;
     }

     updateDisplay();
 };

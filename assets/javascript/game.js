// global variables to be used

// random number generator that the player must match to win
var randomNumber = Math.floor((Math.random() * 120 - 19) + 19);
console.log(randomNumber);

// hidden value generator for each crystal 
var redCrystal = Math.floor((Math.random() * 12) + 1);
var blueCrystal = Math.floor((Math.random() * 12) + 1);
var yellowCrystal = Math.floor((Math.random() * 12) + 1);
var greenCrystal = Math.floor((Math.random() * 12) + 1); 
console.log(redCrystal);
// wins,losses, and score counters
var wins = 0;
var losses = 0;
var totalScore;

// assigning variables to DOM elements 
var displayRandomNumber = $("#random-number");
var userScore = $("#total-score");
var userWins = $("#wins");
var userLosses = $("#losses");

function resetGame() {
    randomNumber = Math.floor((Math.random() * 120 - 19) + 19);
    redCrystal = Math.floor((Math.random() * 12) + 1);
    blueCrystal = Math.floor((Math.random() * 12) + 1);
    yellowCrystal = Math.floor((Math.random() * 12) + 1);    
    greenCrystal = Math.floor((Math.random() * 12) + 1); 
    totalScore;   
};


$("#red-crystal").on("click",function() {
})
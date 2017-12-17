// global variables to be used

// random number generator that the player must match to win
var randomNumber = Math.floor((Math.random() * 120 - 19) + 19);
// testing random number generator
console.log(randomNumber);

// hidden value generator for each crystal 
var redCrystal = Math.floor((Math.random() * 12) + 1);
var blueCrystal = Math.floor((Math.random() * 12) + 1);
var orangeCrystal = Math.floor((Math.random() * 12) + 1);
var greenCrystal = Math.floor((Math.random() * 12) + 1); 
// testing each crystal to see if its being randomized
console.log(redCrystal,blueCrystal,orangeCrystal,greenCrystal);

// wins,losses, and score counters
var wins = 0;
var losses = 0;
var totalScore = 0;

// display random number 
$("#random-number").text("Your random number is: " + randomNumber);

// display total score
$("#total-score").text("Your total score is:" + totalScore);


// click event for the red crystal
$("#red-crystal").on("click",function() {
    totalScore = redCrystal + totalScore;
    $("#total-score").text("Your total score is: " + totalScore);
    console.log(totalScore);
    checkWinOrLoss();
})

//click event for blue crystal 
$("#blue-crystal").on("click",function() {
    totalScore = blueCrystal + totalScore;
    $("#total-score").text("Your total score is: " + totalScore);
    console.log(totalScore);
    checkWinOrLoss();
})

// click event for green crystal
$("#green-crystal").on("click",function() {
    totalScore = greenCrystal + totalScore;
    $("#total-score").text("Your total score is: " + totalScore);
    console.log(totalScore);
    checkWinOrLoss();
})

// click event for orange crystal
$("#orange-crystal").on("click",function() {
    totalScore = orangeCrystal + totalScore;
    $("#total-score").text("Your total score is: " + totalScore);
    console.log(totalScore);
    checkWinOrLoss();
})


// function to check win or loss condition
function checkWinOrLoss() {
    // if total score is the same as random number, increase wins by 1
    // display win message with different color, then reset game
    if (totalScore == randomNumber){
        wins++;
        $("#wins").text("Wins: "  + wins);
        $("#win-lose-message").text("You matched the number! You won!");
        $("#win-lose-message").css("color","yellow");
        $("#win-lose-message").css("font-weight", "bold");
        resetGame();
    }

    // if total score is greater than random number, increase losses by 1
    // display a loss message with different color, then reset game
    else if (totalScore > randomNumber){
        losses++;
        $("#losses").text("Losses: " + losses);
        $("#win-lose-message").text("Sorry you lost! Try again");
        $("#win-lose-message").css("color","red");
        $("#win-lose-message").css("font-weight", "bold");
        resetGame();
    }
}

// resets game
function resetGame() {
    // restoring all of the globally declared variables to a new number
    // resetting random number text and total score text
    randomNumber = Math.floor((Math.random() * 120 - 19) + 19);
    redCrystal = Math.floor((Math.random() * 12) + 1);
    blueCrystal = Math.floor((Math.random() * 12) + 1);
    orangeCrystal = Math.floor((Math.random() * 12) + 1);    
    greenCrystal = Math.floor((Math.random() * 12) + 1); 
    totalScore = 0;   
    $("#random-number").text("Your random number is: " + randomNumber);
    $("#total-score").text("Your total score is: " + totalScore);
}


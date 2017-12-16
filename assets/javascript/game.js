// global variables to be used

// random number generator that the player must match to win
var randomNumber = Math.floor((Math.random() * 120 - 19) + 19);
console.log(randomNumber);

// hidden value generator for each crystal 
var redCrystal = Math.floor((Math.random() * 12) + 1);
var blueCrystal = Math.floor((Math.random() * 12) + 1);
var yellowCrystal = Math.floor((Math.random() * 12) + 1);
var greenCrystal = Math.floor((Math.random() * 12) + 1); 
console.log(redCrystal,blueCrystal,yellowCrystal,greenCrystal);
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

$("#green-crystal").on("click",function() {
    totalScore = greenCrystal + totalScore;
    $("#total-score").text("Your total score is: " + totalScore);
    console.log(totalScore);
    checkWinOrLoss();
})

$("#yellow-crystal").on("click",function() {
    totalScore = yellowCrystal + totalScore;
    $("#total-score").text("Your total score is: " + totalScore);
    console.log(totalScore);
    checkWinOrLoss();

})



function checkWinOrLoss() {
    
    if (totalScore == randomNumber){
        wins++;
        $("#wins").text("Wins: "  + wins);
        alert("You win!");
        resetGame();
    }

    else if (totalScore > randomNumber){
        losses++;
        $("#losses").text("Losses: " + losses);
        alert("You lose!")
        resetGame();
    }
}

// resets game
function resetGame() {
    randomNumber = Math.floor((Math.random() * 120 - 19) + 19);
    redCrystal = Math.floor((Math.random() * 12) + 1);
    blueCrystal = Math.floor((Math.random() * 12) + 1);
    yellowCrystal = Math.floor((Math.random() * 12) + 1);    
    greenCrystal = Math.floor((Math.random() * 12) + 1); 
    totalScore = 0;   
    $("#random-number").text("Your random number is: " + randomNumber);
    $("#total-score").text("Your total score is: " + totalScore);
}

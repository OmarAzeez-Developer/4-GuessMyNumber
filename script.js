// activate strict mode
'use strict';

// Selecting and Manipulating Elements
/*
// select an calss element from html in JavaScript 
// .textContent ==> read the text content
console.log(document.querySelector(".message").textContent);

// select an id element from html in JavaScript
// document.querySelector("#message");

// set the content to ==> "Correct Number"
document.querySelector(".message").textContent = "Correct Number!";

// set number and score
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

// set guess to a value(7)
document.querySelector(".guess").value = 7;
// get(read) the value from an input field
console.log(document.querySelector(".guess").value);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Guss My Number!
/*
// define the random number
let randomNumber = Math.trunc((Math.random() * 20) + 1);

// score
let score = 20;

// high score
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}

// handling click events
// passing(NOT calling) a function expression into addEventListener method
document.querySelector(".check").addEventListener("click", function() {

// console.log(document.querySelector(".guess").value);

// set the content to ==> "Correct Number" when I click
// document.querySelector(".message").textContent = "Correct Number!";

// assign value of(".guess") to const guess
// convert input to a number
const guess = Number(document.querySelector(".guess").value);

console.log(typeof guess, guess);

// no input
if (!guess) {
    // document.querySelector(".message").textContent = "No Number!";
    displayMessage("No Number!");

// win
} else if (guess === randomNumber) {
    // document.querySelector(".message").textContent = "Correct Number!";
    displayMessage("Correct Number!");
    
    // set the "?" to show the guessed number
    document.querySelector(".number").textContent = randomNumber;
    
    // set background color to green
    document.querySelector("body").style.backgroundColor = "#60b347";

    // resize correct number box to make it bigger
    document.querySelector(".number").style.width = "30rem";

    // assign high score
    if (score > highScore) {
        highScore = score;

        // assign high score
        document.querySelector(".highscore").textContent = highScore;
    }

// wrong guess 
} else if (guess !== randomNumber) {
    if (score > 1) {
        // document.querySelector(".message").textContent =  guess > randomNumber ? "Too High!" : "Too Low!";
        displayMessage(guess > randomNumber ? "Too High!" : "Too Low!");
        score --;
        document.querySelector(".score").textContent = score;
    } else {
        // document.querySelector(".message").textContent = "You Lost the Game";
        displayMessage("You Lost the Game");
        document.querySelector(".score").textContent = 0;
    }
}

// // I used ternary operator instead of lengthy if statement
// // too high
// } else if (guess > randomNumber) {
//     if (score > 1) {
//     document.querySelector(".message").textContent = "Too High!";
//     score --;
//     document.querySelector(".score").textContent = score;
// } else {
//     document.querySelector(".message").textContent = "You Lost the Game";
//     document.querySelector(".score").textContent = 0;
// }

// // too low
// } else if (guess < randomNumber) {
//     if (score > 1) {
//     document.querySelector(".message").textContent = "Too Low!";
//     score --;
//     document.querySelector(".score").textContent = score;
// } else {
//     document.querySelector(".message").textContent = "You Lost the Game!";
//     document.querySelector(".score").textContent = 0;
// }
// }

});

// reset method
document.querySelector(".again").addEventListener("click", function() {

    // reset score to 20 when you play agein
    score = 20;

    // get a new random secret number
    randomNumber = Math.trunc((Math.random() * 20) + 1);

    // reset score to 20
    document.querySelector(".score").textContent = 20;

    // reset message
    // document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...");

    // reset the number
    document.querySelector(".number").textContent = "?";

    // reset secret number
    document.querySelector(".guess").value = "";

    // reset  box width
    document.querySelector(".number").style.width = "15rem";

    // reset background color
    document.querySelector("body").style.backgroundColor = "#222";

});
*/



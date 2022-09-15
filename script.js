let player1 = 'scissors';
let player2 = 'rock';

console.log(playRound(player1, player2));

// 

// create variable for player's choice playerSelection
// create variable for computer's choice computerSelection
// prompt player for their choice
// convert player's input into all lowercase to ensure match
// get computer's choice by calling function and initialize computerSelection


// function that takes choices and returns a string indicating who won
function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return "You win!";
  }
  else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return "Computer wins :(";
  }
  else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
    return "Tie game."
  }
  else if (playerSelection == 'rock' && computerSelection == 'paper') {
    return "Computer wins :(";
  }
  else if (playerSelection == 'paper' && computerSelection == 'paper') {
    return "Tie game.";
  }
  else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return "You win!";
  }
  else if (playerSelection == 'rock' && computerSelection == 'rock') {
    return "Tie game.";
    }
  else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return "You win!";
  }
  else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    return "Computer wins :(";
  }
  else {
    return "An error occured";
  }
}
// function to initialize computer's choice to random choice

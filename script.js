// create variable for player's choice playerSelection
let player1 = 'scissors';
let player2 = 'rock';


// prompt player for their choice
player1 = prompt("Please enter rock, paper or scissors:");
// convert player's input into all lowercase to ensure match
// this could be combined in line above where we prompt user for their choice
player1 = player1.toLowerCase();

// output who won to console by calling playRound function
console.log(playRound(player1, getComputerChoice()));





// function to get computer's choiceand initialize computerSelection
function getComputerChoice() {
  // create array of choices
  const choices = ['rock', 'paper', 'scissors'];
  // assign random array element to computer's choice
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(`computer's choice was: ${computerChoice}`);
  return(computerChoice);
}


// function that takes choices and returns a string indicating who won
// could also have nested these - player selection, then an if statement within it with the 
// three choices that computer could pick
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

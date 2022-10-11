// create variables for player and computer choice
let player1 = 0;
let player2 = 0;
// initialize scores
let playerScore = 0;
let computerScore = 0;

//create event listener to start new game, call game function once button pressed
let startGameBtn = document.querySelector('#newGame');
// console.log(startGameBtn);
startGameBtn.addEventListener('click', () => playGame());
let messageDiv = document.querySelector('#messages');
messageDiv.textContent = 'Press button to start a five round game';

// create event listener for buttons
function playGame() {
  messageDiv.textContent = 'Make your choice:';
  
  console.log('playgame function has been called');
  let node = document.getElementById('gameControls');
  console.log(node);
  node.removeChild(node.firstElementChild); //removes startnewgame btn
 
  const rpsParent = document.querySelector('#gameControls'); 
  const  rockBtn = document.createElement('button');
  rockBtn.setAttribute('id', 'rock');
  rockBtn.setAttribute('class', 'RPS');
  rockBtn.textContent = 'Rock';
  rpsParent.appendChild(rockBtn);
  
  const  paperBtn = document.createElement('button');
  paperBtn.setAttribute('id', 'paper');
  paperBtn.setAttribute('class', 'RPS');
  paperBtn.textContent = 'Paper';
  rpsParent.appendChild(paperBtn);

  const  scissorsBtn = document.createElement('button');
  scissorsBtn.setAttribute('id', 'scissors');
  scissorsBtn.setAttribute('class', 'RPS');
  scissorsBtn.textContent = 'Scissors';
  rpsParent.appendChild(scissorsBtn);
  let btns = document.querySelectorAll('button.RPS');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => { 
      player1 = btn.id;
      console.log(`user choice is: ${player1}`);
      player2 = getComputerChoice();
      console.log(`computer's choice is: ${player2}`);
      determineRoundWinner(player1, player2);
      if (playerScore >= 5 | computerScore >= 5) {
        determineGameWinner();
      }
    });
  });
}




// output result of the entire five rounds to console
function determineGameWinner() {
  
  if (playerScore > computerScore) {
    messageDiv.textContent = `You won the game. Score was ${playerScore} to ${computerScore}`;
  }
  else if (playerScore < computerScore) {
    messageDiv.textContent = `You lost the game. Score was ${playerScore} to ${computerScore}`;
  }
  resetBtns();
  resetGame();
}

function resetBtns() {
  node = document.querySelector('#gameControls');
  rockBtn = document.querySelector('#rock');
  node.removeChild(rockBtn);
  paperBtn = document.querySelector('#paper');
  node.removeChild(paperBtn);
  scissorsBtn = document.querySelector('#scissors')
  node.removeChild(scissorsBtn);
  node.appendChild(startGameBtn);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
}

// function to get computer's choice and initialize computerSelection
function getComputerChoice() {
  // create array of choices
  const choices = ['rock', 'paper', 'scissors'];

  // assign random array element to computer's choice
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return(computerChoice);
}

function determineRoundWinner() {
  // determine, increment score and output who won to console by calling playRound function
  if (playRound(player1, player2) == 'win') {
    // increment player's score
    playerScore += 1;
    messageDiv.textContent = `You win this Round. Player score is: ${playerScore} ,  Computer's score is: ${computerScore} `;
  }
  else if (playRound(player1, player2) == 'lose') {
    computerScore += 1; 
    messageDiv.textContent = `You lose this round. Player score is: ${playerScore} ,  Computer's score is: ${computerScore} `;
  }
  else if (playRound(player1, player2) == 'tie') {
    messageDiv.textContent = `You tied this round. Player score is: ${playerScore} ,  Computer's score is: ${computerScore} `;
  }
}  

// function that takes choices and returns a string indicating if player won or lost
// could also have nested these - player selection, then an if statement within it with the 
// three choices that computer could pick
function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return "win";
  }
  else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return "lose";
  }
  else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
    return "tie";
  }
  else if (playerSelection == 'rock' && computerSelection == 'paper') {
    return "lose";
  }
  else if (playerSelection == 'paper' && computerSelection == 'paper') {
    return "tie";
  }
  else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return "win";
  }
  else if (playerSelection == 'rock' && computerSelection == 'rock') {
    return "tie";
    }
  else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return "win";
  }
  else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    return "lose";
  }
  else {
    return "An error occured";
  }
}



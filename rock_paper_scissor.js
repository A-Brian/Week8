// Function to get the computer's choice
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
  // Convert playerSelection to lowercase for case-insensitive comparison
  playerSelection = playerSelection.toLowerCase();

  if (
    (playerSelection === 'rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'Paper') ||
    (playerSelection === 'paper' && computerSelection === 'Rock')
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'Paper') ||
    (playerSelection === 'scissors' && computerSelection === 'Rock') ||
    (playerSelection === 'paper' && computerSelection === 'Scissors')
  ) {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `It's a tie! Both chose ${playerSelection}`;
  }
}

// Function to play the game for a specified number of rounds
function game(rounds) {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < rounds; i++) {
    const playerSelection = prompt('Enter your choice: Rock, Paper, or Scissors');
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    // Update scores
    if (result.startsWith('You win')) {
      playerScore++;
    } else if (result.startsWith('You lose')) {
      computerScore++;
    }
  }

  // Determine the overall winner
  if (playerScore > computerScore) {
    console.log(`You win the game! Score: ${playerScore}-${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`You lose the game! Score: ${playerScore}-${computerScore}`);
  } else {
    console.log(`It's a tie! Score: ${playerScore}-${computerScore}`);
  }
}

// Start the game with 5 rounds
game(5);

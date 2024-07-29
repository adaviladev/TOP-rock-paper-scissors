let computerScore = 0;
let humanScore = 0;
// Get rock, paper or scissors from the computer
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Get rock, paper or scissors from the player
function getHumanChoice() {
  let humanChoice = prompt(
    'Choose "Rock", "Paper", or "Scissors"'
  ).toLowerCase();
  console.log(humanChoice);
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    alert("Player wins the round.");
    humanScore++;
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    alert("Computer wins the round.");
    computerScore++;
  } else {
    alert("It's a draw")
  }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        console.log(computerChoice)
        const humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);       
    }
    if (computerScore > humanScore) {
        alert("You lose")
    } else if (computerScore < humanScore) {
        alert("You win")
    } else {
        alert("It ended in a draw")
    }
}

playGame();

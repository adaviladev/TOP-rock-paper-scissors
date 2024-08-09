let computerScore = 0;
let playerScore = 0;

// Get Rock, Paper or Scissors from the computer
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  return ["Rock", "Paper", "Scissors"][randomNum];
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    showWhoWonRound.textContent = `Player wins the round. Computer chose ${computerChoice}.`
    playerScore++;
  } else if (
    (computerChoice === "Rock" && playerChoice === "Scissors") ||
    (computerChoice === "Paper" && playerChoice === "Rock") ||
    (computerChoice === "Scissors" && playerChoice === "Paper")
  ) {
    showWhoWonRound.textContent = `Computer wins the round. Computer chose ${computerChoice}.`
    computerScore++;
  } else {

    showWhoWonRound.textContent = `It's a draw. Both chose ${computerChoice}.`
  }

  updateScores();

  if (playerScore === 5 || computerScore === 5) {
    if (computerScore > playerScore) {
      alert("Game over: You lose!");
    } else if (computerScore < playerScore) {
      alert ("Game over: You win!");
    } else {
      alert ("Game over: It's a draw!");
    }

    computerScore = 0;
    playerScore = 0;

    updateScores()
    showWhoWonRound.textContent = ""

  }
}

function updateScores() {
  document.querySelector("#computer-score").textContent = `Computer score: ${computerScore}`;
  document.querySelector("#player-score").textContent = `Player score: ${playerScore}`;
}

const buttonContainer = document.querySelector("#button-container");

["Rock", "Paper", "Scissors"].forEach(name => {
  const button = document.createElement("button");
  button.textContent = name;
  buttonContainer.appendChild(button);

  button.addEventListener("click", () => {
    playRound(name);
  });
});


const showComputerScore = document.createElement("p");
const showPlayerScore = document.createElement("p");

showComputerScore.setAttribute("id", "computer-score");
showPlayerScore.setAttribute("id", "player-score");

showComputerScore.textContent = `Computer score: ${computerScore}`;
showPlayerScore.textContent = `Player score: ${playerScore}`

buttonContainer.appendChild(showComputerScore);
buttonContainer.appendChild(showPlayerScore);

showWhoWonRound = document.createElement("p")

buttonContainer.appendChild(showWhoWonRound);

// query selectors

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const body = document.querySelector(".body");
const container = document.querySelector(".container");

// keeping score
let humanScore = 0;
let computerScore = 0;
let human;
let count = 0;
console.log(count);

const roundResult = document.createElement("div");
const finalResult = document.createElement("div");
const pScore = document.createElement("div");

document.addEventListener("click", (e) => {
  if (e.target === rock) {
    human = "rock";
  } else if (e.target === paper) {
    human = "paper";
  } else if (e.target === scissors) {
    human = "scissors";
  } else return;

  let computer = getComputerChoice();
  playRound(human, computer);
  count++;
  pScore.textContent = `Round ${count}: Human: ${humanScore} Computer: ${computerScore}`;

  if (count === 5) {
    finalResult.style.fontWeight = "bold";
    if (humanScore > computerScore) {
      finalResult.textContent = "Final result: Human wins!";
      body.appendChild(finalResult);
    } else if (computerScore > humanScore) {
      finalResult.textContent = "Final result: Computer wins!";
      body.appendChild(finalResult);
    } else {
      finalResult.textContent = "Final result: A draw. Play again?";
      body.appendChild(finalResult);
    }
    count = 0;
    humanScore = 0;
    computerScore = 0;

    setTimeout(() => {
      pScore.remove();
      roundResult.remove();
      finalResult.remove();
    }, 3000);
  }
});

//play round

function playRound(humanChoice, computerChoice) {
  body.appendChild(pScore);

  if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "scissors")
  ) {
    roundResult.textContent = `It's a tie!`;
    body.appendChild(roundResult);
  }

  if (humanChoice === "rock" && computerChoice === "paper") {
    body.appendChild(pScore);
    roundResult.textContent = `You lose! Paper beats Rock`;
    body.appendChild(roundResult);
    ++computerScore;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    roundResult.textContent = `You win! Rock beats Scissors`;
    body.appendChild(roundResult);
    ++humanScore;
  }

  if (humanChoice === "paper" && computerChoice === "rock") {
    roundResult.textContent = `You win! Paper beats Rock`;
    body.appendChild(roundResult);
    ++humanScore;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    roundResult.textContent = `You lose! Scissors cuts Paper`;
    body.appendChild(roundResult);
    ++computerScore;
  }
  if (humanChoice === "scissors" && computerChoice === "rock") {
    roundResult.textContent = `You lose! Rock beats scissors`;
    body.appendChild(roundResult);
    ++computerScore;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    roundResult.textContent = `You win! Scissors cuts paper`;
    body.appendChild(roundResult);
    ++humanScore;
  }
}

// Computer choice
function getComputerChoice() {
  let computerChoice;
  let randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 0) {
    computerChoice = "rock";
  } else if (randomChoice === 1) {
    computerChoice = "paper";
  } else if (randomChoice === 2) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

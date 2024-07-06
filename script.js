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

document.addEventListener("click", (e) => {
  if (e.target === rock) {
    human = "rock";
  }
  if (e.target === paper) {
    human = "paper";
  }
  if (e.target === scissors) {
    human = "scissors";
  }

  let computer = getComputerChoice();
  playRound(human, computer);
  count++;

  if (count === 5) {
    if (humanScore > computerScore) {
      console.log(`Human wins!`);
    } else if (computerScore > humanScore) {
      console.log(`Computer wins!`);
    } else console.log(`A draw. Play Again?`);
    count = 0;
  }
});

//play round

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "" || null) {
    console.log("You must provide an input");
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "scissors")
  ) {
    console.log(`It's a tie`);
  }

  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log(`You lose! Paper beats Rock`);
    ++computerScore;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log(`You win! Rock beats Scissors`);
    ++humanScore;
  }

  if (humanChoice === "paper" && computerChoice === "rock") {
    console.log(`You win! Paper beats Rock`);
    ++humanScore;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log(`You lose! Scissors cuts Paper`);
    ++computerScore;
  }
  if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log(`You lose! Rock beats scissors`);
    ++computerScore;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log(`You win! Scissors cuts paper`);
    ++humanScore;
  }

  const pScore = document.createElement("p");
  pScore.setAttribute("class", "score");
  pScore.textContent = `Round scores - Human: ${humanScore}. Computer: ${computerScore}`;

  if (!document.querySelector(".score")) body.appendChild(pScore);
}

// Computer choice
function getComputerChoice() {
  let computerChoice;
  let randomChoice = Math.floor(Math.random() * 3);
  console.log(randomChoice);
  if (randomChoice === 0) {
    computerChoice = "rock";
  } else if (randomChoice === 1) {
    computerChoice = "paper";
  } else if (randomChoice === 2) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

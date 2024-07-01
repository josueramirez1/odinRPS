let humanScore = 0;
let computerScore = 0;

// Computer choice

function getComputerChoice() {
  let computerChoice;
  let randomChoice = Math.random();
  if (randomChoice < 0.34) {
    computerChoice = "rock";
  } else if (randomChoice >= 0.34 && randomChoice < 0.65) {
    computerChoice = "paper";
  } else if (randomChoice >= 0.65) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

// my choice

function getHumanChoice() {
  let humanChoice = prompt("Rock, paper, or scissors?", "");

  return humanChoice;
}

//play round

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "" || null) {
    console.log("You must provide an input");
    return;
  }
  humanChoice.toLowerCase();

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

  console.log(
    `Round scores - Human: ${humanScore}. Computer: ${computerScore}`
  );
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
playRound(humanChoice, computerChoice);

"strict";

// Create function (getComputerChoice) that generates the strings "rock", "paper", or "scissors"

// Create function (getHumanChoice) that stores a user's entry then returns it as either "rock", "paper", or "scissors"

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice === 1) {
    computerChoice = "rock";
  } else if (computerChoice === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

function getHumanChoice() {
  let userEntry = prompt("Let's play! Choose one: rock, paper, or scissors");

  return userEntry.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

// Create a function that compares the user and computer's choices, announce a winner, and add the score to the variable humanScore or computerScore

function playRound(humanChoice, computerChoice) {
  // Announce who's the winner

  if (humanChoice === "rock" && computerChoice == "paper") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  } else if (humanChoice === "paper" && computerChoice == "scissors") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  } else if (humanChoice === "scissors" && computerChoice == "rock") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  } else if (humanChoice === "scissors" && computerChoice == "paper") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if (humanChoice === "rock" && computerChoice == "scissors") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if (humanChoice === "paper" && computerChoice == "rock") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if (humanChoice === computerChoice) {
    console.log(`No one won. You both chose ${humanChoice}`);
  } else {
    console.log("Invalid entry. Try again!");
  }

  // Increment scores
  if (humanChoice === "rock" && computerChoice == "paper") {
    computerScore += 1;
  } else if (humanChoice === "paper" && computerChoice == "scissors") {
    computerScore += 1;
  } else if (humanChoice === "scissors" && computerChoice == "rock") {
    computerScore += 1;
  } else if (humanChoice === "scissors" && computerChoice == "paper") {
    humanScore += 1;
  } else if (humanChoice === "rock" && computerChoice == "scissors") {
    humanScore += 1;
  } else if (humanChoice === "paper" && computerChoice == "rock") {
    humanScore += 1;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(humanScore, computerScore);

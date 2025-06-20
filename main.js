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

  return userEntry;
}

console.log(getHumanChoice());

const container = document.querySelector("#container");
const scoreDiv = document.querySelector("#score");
const resultsDiv = document.querySelector("#results");
const humanChoiceDiv = document.querySelector("#humanChoice");
const computerChoiceDiv = document.querySelector("#computerChoice");

let computerScore = 0;
let humanScore = 0;

container.addEventListener("click", (e) => {
  const btn = e.target.closest("button");

  if (!btn) return;

  resultsDiv.textContent = "";

  const humanChoice = btn.id;

  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  humanChoiceDiv.textContent = `Human: ${humanChoice}`;
  computerChoiceDiv.textContent = `Computer: ${computerChoice}`;

  playRound(humanChoice, computerChoice);
});

const playRound = (humanChoice, computerChoice) => {
  let result = "";
  if (humanChoice === computerChoice) {
    result = " It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    result = " Human wins!";
    humanScore++;
  } else {
    result = " Computer wins!";
    computerScore++;
  }
  scoreDiv.textContent = ` ${result} | Score: Human ${humanScore} - Computer ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    announceWinner();
  }
};

const announceWinner = () => {
  const winner = humanScore === 5 ? "Human" : "Computer";
  resultsDiv.textContent = `${winner} wins the game!`;
  humanScore = 0;
  computerScore = 0;
};

let computerScore = 0;
let humanScore = 0;

// Computer's Choice
const getComputerChoice = () => {
  const computerChoice = Math.random();

  if (computerChoice <= 1 / 3) {
    return "rock";
  } else if (computerChoice <= 2 / 3 && computerChoice >= 1 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
};

// Human's Choice
const getHumanChoice = () => {
  const input = prompt("rock, paper, or scissors?");
  const humanChoice = input.toLowerCase();
  return humanChoice;
};
// Play a Round
const playRound = (computerChoice, humanChoice) => {
  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
  result = "";

  if (computerChoice === humanChoice) {
    result = "It's a Tie!";
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    result = "You Lose!";
    computerScore++;
  } else {
    result = "You Win!";
    humanScore++;
  }

  console.log(`Computer's Choice: ${computerChoice}`);
  console.log(`Human's Choice: ${humanChoice}`);
  console.log(
    `${result} Score: Computer: ${computerScore} Human: ${humanScore}`,
  );
};
// Play 5 rounds of the game and keep score
const playGame = () => {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
};

playGame();

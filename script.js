let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice(){
    let choice = prompt("Enter your choice (rock, paper, scissors): ").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors: ").toLowerCase();
    }
    return choice;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function playGame(){
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
    console.log(`Final Score: You ${humanScore} - Computer ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry! You lose the game.");
    } else {
        console.log("It's a tie!");
    }
} 

const scissors = document.querySelector("#scissors");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");

const results = document.createElement("div");
results.classList.add("results");
results.textContent = "Results will be displayed here.";
document.body.appendChild(results);

const score = document.createElement("div");
score.classList.add("score");
score.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;
document.body.appendChild(score);

scissors.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("scissors", computerChoice);
    results.textContent = result;
    score.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;
});
rock.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("rock", computerChoice);
    results.textContent = result;
    score.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;
});
paper.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("paper", computerChoice);
    results.textContent = result;
    score.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;
});

if(humanScore >= 5 || computerScore >= 5) {
    results.textContent = "Game Over!";
    if (humanScore > computerScore) {
        results.textContent += " You win!";
    } else if (humanScore < computerScore) {
        results.textContent += " You lose!";
    } else {
        results.textContent += " It's a tie!";
    }
}

// playGame();
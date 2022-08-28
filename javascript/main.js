const scoreKeep = document.getElementById("score")
const returnScore = document.getElementById("score")
const returnComputer = document.getElementById("computerChoice")
const returnWinner = document.getElementById("winner")
const choice = ["rock", "paper", "scissors"]
let computerScore = 0; 
let userScore = 0;


const getWinner = (event) => {
    const userChoice = event.target.id
    const computerChoice = choice[getRandom()];
    console.log('user / computer: ', userChoice, computerChoice);
    const winner = calculateWinner(userChoice, computerChoice);
    if (winner !== "It's a tie") tally(winner);
    returnComputer.textContent = `The Computer Chose: ${computerChoice}`; 
    returnWinner.textContent = winner;
    scoreKeep.textContent = `User: ${userScore} - ${computerScore} : Computer`
}

function getRandom () {
    return Math.floor(Math.random() * choice.length)
}
 
function calculateWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "It's a tie";
    switch (userChoice) {
        case "rock":
            return computerChoice === "paper" ? "You Lose" : "You Win";
        case "paper":
            return computerChoice === "scissors" ? "You Lose" : "You Win";
        case "scissors":
            return computerChoice === "rock" ? "You Lose" : "You Win";
    }
}

function tally(message) {
    if (message === "You Win") userScore++;
    if (message === "You Lose") computerScore++;
}

const weapons = document.getElementsByClassName("weapon");
for (let weapon of weapons) {
    weapon.addEventListener("click", getWinner)
}
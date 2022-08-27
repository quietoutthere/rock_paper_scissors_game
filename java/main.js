
let click = document.getElementById("icons")
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scoreKeep = document.getElementById("score")
let scissors = document.getElementById("scissors")
let returnScore = document.getElementById("score")
let returnComputer = document.getElementById("computerChoice")
let returnWinner = document.getElementById("winner")
let choice = ["Rock", "Paper", "Scissors"]
let computerScore = 0; 
let userScore = 0;

const choseRock = rock.addEventListener("click", versusRock)
const chosePaper = paper.addEventListener("click", versusPaper)
const choseScissors = scissors.addEventListener("click", versusScissors)

function versusRock() {
    y = Math.floor(Math.random()*3);
    returnComputer.textContent = `The Computer Chose: ${choice[y]}`; 
    returnWinner.textContent = rockResult();
    tally(rockResult());
    scoreKeep.textContent = `User: ${userScore} - ${computerScore} : Computer`
}

function versusPaper() {
    y = Math.floor(Math.random()*3);
    returnComputer.textContent = `The Computer Chose: ${choice[y]}`; 
    returnWinner.textContent = paperResult();
    tally(paperResult());
    scoreKeep.textContent = `User: ${userScore} - ${computerScore} : Computer`
    
}

function versusScissors() {
    y = Math.floor(Math.random()*3)
    returnComputer.textContent = `The Computer Chose: ${choice[y]}`; 
    returnWinner.textContent = scissorsResult();
    tally(scissorsResult());
    scoreKeep.textContent = `User: ${userScore} - ${computerScore} : Computer`
    
}

function scissorsResult() {
    if (y === 0) {
        return "You lose";
    } else if (y === 1) {
        return "You win";
    } else if (y === 2) {
        return "It's a tie";
    }
}

function rockResult() {
    if (y === 0) {
        return "It's a tie";
    } else if (y === 1) {
        return "You lose";
    } else if (y === 2) {
        return "You win";
    }
}

function paperResult() {
    if (y=== 0) {
        return "You win";
    } else if (y===1) {
        return "It's a tie";
    } else if (y===2) {
        return "You lose";
    }
}

function tally(a) {
    if (a==="You win") {
        userScore++;
    } 
    if (a==="You lose") {
        computerScore++;
    }  
}

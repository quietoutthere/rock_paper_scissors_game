const click = document.getElementById("icons")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
let returnScore = document.getElementById("score")
let returnComputer = document.getElementById("computerChoice")
let returnWinner = document.getElementById("winner")
let y = Math.floor(Math.random()*3)
let choice = ["Rock", "Paper", "Scissors"]

//let computerScore = 0 
//let userScore = 0

console.log(refresh())

const choseRock = rock.addEventListener("click", versusRock)
const chosePaper = paper.addEventListener("click", versusPaper)
const choseScissors = scissors.addEventListener("click", versusScissors)

const computerChoice = click.addEventListener("click", refresh)

function refresh() {
    return choice[y]

}

function versusRock() {
    returnComputer.textContent = `The Computer Chose: ${choice[y]}`; 
    returnWinner.textContent = rockResult();
}

function versusPaper() {
    returnComputer.textContent = `The Computer Chose: ${choice[y]}`; 
    returnWinner.textContent = paperResult()
}

function versusScissors() {
    returnComputer.textContent = `The Computer Chose: ${choice[y]}`; 
    returnWinner.textContent = scissorsResult()
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

function tally(a,b,c) {
    if (a==="You win" | b=== "You win" | c==="You win") {
        return userScore++;
    } else if (a==="You lose" | b==="You lose" | c=== "You lose") {
        return computerScore++;
    }
}


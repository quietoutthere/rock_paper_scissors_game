const clicks = document.getElementsByClassName("icons")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
let returnScore = document.getElementById("score")
let returnComputer = document.getElementById("computerChoice")
let returnWinner = document.getElementById("winner")
const choice = ["Rock", "Paper", "Scissors"]
const y = Math.floor(Math.random()*3);
let x=1


const choseRock = rock.addEventListener("click", versusRock)
const chosePaper =paper.addEventListener("click", versusPaper)
const choseScissors = scissors.addEventListener("click", versusScissors)

console.log(choice[x])
console.log()

returnScore.textContent = `(User) ${tally(rockResult(), paperResult(), scissorsResult())}  - (Computer)`; 
      

function versusRock() {
    returnComputer.textContent = `The Computer Chose: ${choice[y]}`; 
    returnWinner.textContent = rockResult();
        function rockResult() {
        if (y === 0) {
            return "It's a tie";
        } else if (y === 1) {
            return "You lose";
        } else if (y === 2) {
            return "You win";
        }
    }
}

function versusPaper() {
    returnComputer.textContent = `The Computer Chose: ${choice[y]}`; 
    returnWinner.textContent = paperResult()
        function paperResult() {
            if (y=== 0) {
                return "You win";
            } else if (y===1) {
                return "It's a tie";
            } else if (y===2) {
                return "You lose";
            }
        }
}

function versusScissors() {
    returnComputer.textContent = `The Computer Chose: ${choice[y]}`; 
    returnWinner.textContent = scissorsResult()
        function scissorsResult() {
            if (y=== 0) {
                return "You lose";
            } else if (y===1) {
                return "You win";
            } else if (y===2) {
                return "It's a tie";
            }
        }
}

function tally(a,b,c) {
    if (a === "you win") {
        return x++;
    } else if (b === "you win") {
        return x++;
    } else if (c === "you win") {
        return x++;
    }
}
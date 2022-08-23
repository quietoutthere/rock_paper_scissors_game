const clicks = document.getElementsByClassName("icons")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const returnScore = document.getElementById("score")
const returnUser = document.getElementById("userChoice")
const returnComputer = document.getElementById("computerChoice")
const returnWinner = document.getElementById("winner")
const choice = ["Rock", "Paper", "Scissors"]
const y = Math.floor(Math.random()*3);

const choseRock = rock.addEventListener("click", versusRock)
const chosePaper =paper.addEventListener("click", versusPaper)
const choseScissors = scissors.addEventListener("click", versusScissors)
//const displayChoice = clicks.addEventListener("click", )




let scoreKeep = `(User)  - ${choice[y]} (Computer)`; 
let computerWon = `The Computer Chose: ${choice[y]}`;

let results = 
    returnScore.textContent = scoreKeep;
    returnComputer.textContent = computerWon;   

function versusRock() {
    results
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
    results
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
    results
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
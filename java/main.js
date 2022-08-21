const clicks = document.getElementById("icons")
const returnScore = document.getElementById("score")
const returnUser = document.getElementById("userChoice")
const returnComputer = document.getElementById("computerChoice")
const returnWinner = document.getElementById("winner")
const choice = ["Rock", "Paper", "Scissors"]


let x = Math.floor(Math.random()*3);
let y = Math.floor(Math.random()*3);
let scoreKeep = `(User) ${choice[x]} - ${choice[y]} (Computer)`; 
let userWon = `The User Chose: ${choice[x]}`;
let computerWon = `The Computer Chose: ${choice[y]}`;

console.log(scoreKeep)
clicks.addEventListener("click", addData)

function addData() {
    returnScore.textContent = scoreKeep
    returnUser.textContent= userWon
    returnComputer.textContent = computerWon
    returnWinner.textContent = winner(x,y)
}

function winner() {
    if (x > y) {
        return "The User Won!";
    } if (x < y) {
        return "The computer Won!";
    } if (x = y) {
        return "It was a tie"
    }
}

function tally()
    let a = "Noice";
    return a

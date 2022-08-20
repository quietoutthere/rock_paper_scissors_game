const clickRock = document.getElementById("rock")
const clickPaper = document.getElementById("paper")
const clickScissors = document.getElementById("scissors")
const returnUser = document.getElementById("userChoice")
const returnComputer = document.getElementById("computerChoice")
const returnWinner = document.getElementById("winner")
const gameChoice = ["rock", "paper", "scissors"]

clickRock.addEventListener("click",addUserScore)

clickPaper.addEventListener("click",addComputer)
let incremental = 0
function addUserScore() {
    incremental ++ 
    returnUser.textContent = "hellyeah" + incremental
}
function addComputer() {
    returnComputer.textContent = "noice"
}

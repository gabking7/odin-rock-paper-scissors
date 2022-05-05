
let computerSelection = ["rock", "paper", "scissors"]

let rockBtn = document.getElementById("rock")
let paperBtn = document.getElementById("paper")
let scissorsBtn = document.getElementById("scissors")
let resetBtn = document.getElementById("reset")

let displayDiv = document.getElementById("display")
let scoreDiv = document.getElementById("score")

let userChoice = ""
let cpuChoice = ""

let userScore = 0
let cpuScore = 0


// function computerPlay() {
//     cpuChoice = computerSelection[randNum]
// }


function playRound(playerSelection, cpuSelection) {
    scoreDiv.textContent = `User Score: ${userScore} | CPU Score: ${cpuScore}`
    if (playerSelection === "rock" && cpuSelection === "paper") {
        displayDiv.textContent = `You lose, ${cpuSelection} beats ${playerSelection}.\n `
        cpuScore += 1
        scoreDiv.textContent = `User Score: ${userScore} | CPU Score: ${cpuScore}`
    } else if (playerSelection === "paper" && cpuSelection === "scissors") {
        displayDiv.textContent = `You lose, ${cpuSelection} beats ${playerSelection}.\n`
        cpuScore += 1
        scoreDiv.textContent = `User Score: ${userScore} | CPU Score: ${cpuScore}`
    } else if (playerSelection === "scissors" && cpuSelection === "rock") {
        displayDiv.textContent = `You lose, ${cpuSelection} beats ${playerSelection}.\n`
        cpuScore += 1
        scoreDiv.textContent = `User Score: ${userScore} | CPU Score: ${cpuScore}`
    } else if (playerSelection === cpuSelection) {
        displayDiv.textContent = `You both chose ${playerSelection}, it's a tie!\n`
        scoreDiv.textContent = `User Score: ${userScore} | CPU Score: ${cpuScore}`
    } else {
        displayDiv.textContent = `You win, ${playerSelection} beats ${cpuSelection}!\n`
        userScore += 1
        scoreDiv.textContent = `User Score: ${userScore} | CPU Score: ${cpuScore}`
    }
}

resetBtn.addEventListener("click", function() {
    userScore = 0
    cpuScore = 0
    displayDiv.textContent = ""
    scoreDiv.textContent = `User Score: ${userScore} | CPU Score: ${cpuScore}`
})     


function announceWinner() {
    if (cpuScore === 5) {
        displayDiv.textContent = "The cpu has won this game. Please reset the game."
    } else if (userScore === 5) {
        displayDiv.textContent = "You won this game! Reset game to test your luck again!"
    }
}

rockBtn.addEventListener("click", function() {
    userChoice = "rock"
    let randNum = Math.floor(Math.random() * computerSelection.length) 
    cpuChoice = computerSelection[randNum]
    playRound(userChoice, cpuChoice)
    announceWinner()
})

paperBtn.addEventListener("click", function() {
    userChoice = "paper"
    let randNum = Math.floor(Math.random() * computerSelection.length) 
    cpuChoice = computerSelection[randNum]
    playRound(userChoice, cpuChoice)
    announceWinner()
})

scissorsBtn.addEventListener("click", function() {
    userChoice = "scissors"
    let randNum = Math.floor(Math.random() * computerSelection.length) 
    cpuChoice = computerSelection[randNum]
    playRound(userChoice, cpuChoice)
    announceWinner()
})

// let userChoice = prompt("Rock, paper, or scissors?")
// let cpuSelection = computerPlay()

//console.log(playRound(userPrompt.toLowerCase(), cpuSelection))
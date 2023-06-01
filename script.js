const choices = ["rock", "paper", "scissors"];
let compScore = 0
let playerScore = 0

function getComputerChoice(arr) {
    const random = Math.floor(Math.random() * arr.length)
    const compChoice = arr[random]
    return compChoice
}

let compChoice
let playerChoice

function playRound(playerChoice, compChoice) {
    playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase()
    compChoice = getComputerChoice(choices)
    if (playerChoice === compChoice) {

        console.log("Draw!")
    } else if (playerChoice === "rock" && compChoice === "scissors") {
        playerScore++
        console.log("You win! Rock beats scissors!")
    } else if (playerChoice === "rock" && compChoice === "paper") {
        compScore++
        console.log("You loose! Paper beats rock!")
    } else if (playerChoice === "paper" && compChoice === "rock") {
        playerScore++
        console.log("You win! Paper beats rock!")
    } else if (playerChoice === "paper" && compChoice === "scissors") {
        compScore++
        console.log("You loose! Scissors beats paper!")
    } else if (playerChoice === "scissors" && compChoice === "paper") {
        playerScore++
        console.log("You win! Scissors beats paper!")
    } else if (playerChoice === "scissors" && compChoice === "rock") {
        compScore++
        console.log("You loose! Rock beats scissors!")
    } else {
        console.log("Hmm, I don't think you picked rock, paper, or scissors")
    }
}

function game() {
    playRound(playerChoice, compChoice)
    console.log(`Player: ${playerScore} - Computer: ${compScore}`)
    playRound(playerChoice, compChoice)
    console.log(`Player: ${playerScore} - Computer: ${compScore}`)
    playRound(playerChoice, compChoice)
    console.log(`Player: ${playerScore} - Computer: ${compScore}`)
    playRound(playerChoice, compChoice)
    console.log(`Player: ${playerScore} - Computer: ${compScore}`)
    playRound(playerChoice, compChoice)
    console.log(`Final score is You: ${playerScore} and Computer: ${compScore}.`)
}

game()
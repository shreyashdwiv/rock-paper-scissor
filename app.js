const computerChoiceDisplay = document.getElementById('computer_choice')
const userChoiceDisplay = document.getElementById('user_choice')
const resultDisplay = document.getElementById('Results')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResults()
}))


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if(randomNumber === 1) {
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'paper'
    }
    if(randomNumber === 3){
        computerChoice = 'scissor'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResults() {
    if(computerChoice === userChoice){
        result = 'its a draw'
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win'
    }
    if(computerChoice === 'rock' && userChoice === 'scissor'){
        result = 'you lost'
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lost'
    }
    if(computerChoice === 'paper' && userChoice === 'scissor'){
        result = 'you win'
    }
    if(computerChoice === 'scissor' && userChoice === 'paper'){
        result = 'you lose'
    }
    if(computerChoice === 'scossor' && userChoice === 'rock'){
        result = 'you win'
    }
    resultDisplay.innerHTML=result
}
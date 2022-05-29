const yourChoiceDisplay = document.getElementById('your-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')
const computerScoreDisplay = document.getElementById('computer-score')
const yourScoreDisplay = document.getElementById('your-score')
let yourChoice
let computerChoice
let result
let computerScore = 0
let yourScore = 0

const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    yourChoice = e.target.innerHTML
    yourChoiceDisplay.innerHTML = yourChoice
    generateChoice()
    getResult()
}))

function generateChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    if (randomNumber === 1){
        computerChoice = '✊🏽'
    }
    if (randomNumber === 2){
        computerChoice = '✋🏽'
    }
    if (randomNumber === 3){
        computerChoice = '✌🏽'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function getResult(){
    if (computerChoice === yourChoice){
        result = "It's a draw 🤝🏽"
    }
    if (computerChoice === '✊🏽' && yourChoice === '✋🏽'){
        result = 'You win 😀'
        yourScore++
    }
    if (computerChoice === '✊🏽' && yourChoice === '✌🏽'){
        result = 'You lose 😥'
        computerScore++
    }
    if (computerChoice === '✌🏽' && yourChoice === '✋🏽'){
        result = 'You lose 😥'
        computerScore++
    }
    if (computerChoice === '✌🏽' && yourChoice === '✊🏽'){
        result = 'You win 😀'
        yourScore++
    }
    if (computerChoice === '✋🏽' && yourChoice === '✊🏽'){
        result = 'You lose 😥'
        computerScore++
    }
    if (computerChoice === '✋🏽' && yourChoice === '✌🏽'){
        result = 'You win 😀'
        yourScore++
    }
    resultDisplay.innerHTML = result
    yourScoreDisplay.innerHTML = yourScore
    computerScoreDisplay.innerHTML = computerScore
    
}
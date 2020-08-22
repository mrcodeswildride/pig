let die = document.getElementById(`die`)
let rollButton = document.getElementById(`rollButton`)
let passButton = document.getElementById(`passButton`)

let player1Paragraph = document.getElementById(`player1Paragraph`)
let player2Paragraph = document.getElementById(`player2Paragraph`)
let scoreParagraph = document.getElementById(`scoreParagraph`)

let switchButton = document.getElementById(`switchButton`)
let messageParagraph = document.getElementById(`messageParagraph`)

let player1 = 0
let player2 = 0
let score = 0
let turn = `Player 1`

rollButton.addEventListener(`click`, roll)
passButton.addEventListener(`click`, pass)
switchButton.addEventListener(`click`, pass)

function roll() {
  die.style.display = `none`
  rollButton.disabled = true
  passButton.disabled = true

  setTimeout(showDie, 250)
}

function showDie() {
  let dieRoll = Math.floor(Math.random() * 6) + 1
  die.src = `${dieRoll}.gif`
  die.style.display = `block`

  if (dieRoll == 1) {
    score = 0
    scoreParagraph.innerHTML = `Score this turn: ${score}`

    switchButton.style.display = `block`
  }
  else {
    score = score + dieRoll
    scoreParagraph.innerHTML = `Score this turn: ${score}`

    if (turn == `Player 1` && player1 + score >= 100) {
      messageParagraph.style.display = `block`
      messageParagraph.innerHTML = `Player 1 wins`
    }
    else if (turn == `Player 2` && player2 + score >= 100) {
      messageParagraph.style.display = `block`
      messageParagraph.innerHTML = `Player 2 wins`
    }
    else {
      rollButton.disabled = false
      passButton.disabled = false
    }
  }
}

function pass() {
  if (turn == `Player 1`) {
    player1 = player1 + score
    player1Paragraph.innerHTML = `Player one: ${player1}`

    turn = `Player 2`
    player1Paragraph.classList.remove(`turn`)
    player2Paragraph.classList.add(`turn`)
  }
  else if (turn == `Player 2`) {
    player2 = player2 + score
    player2Paragraph.innerHTML = `Player two: ${player2}`

    turn = `Player 1`
    player2Paragraph.classList.remove(`turn`)
    player1Paragraph.classList.add(`turn`)
  }

  score = 0
  scoreParagraph.innerHTML = `Score this turn: ${score}`

  rollButton.disabled = false
  passButton.disabled = true
  switchButton.style.display = `none`
}
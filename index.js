// Define the player object with their name and chip count
let player = {
name: "John",
chips: 200
}

// Initialize variables and elements
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageElement = document.getElementById("message-el")
let sumElement = document.getElementById("sum-el")
let cardsElement = document.getElementById("cards-el")
let playerElement = document.getElementById("player-el")

playerElement.textContent = player.name + ": $" + player.chips

// Generate a random card between 1 and 13, with values above 10 equal to 10
function getRandomCard() {
let randomNumber = Math.floor(Math.random() * 13) + 1
if (randomNumber > 10) {
return 10
} else if (randomNumber === 1) {
return 11
} else {
return randomNumber
}
}

// Start the game by dealing two initial cards
function startGame() {
isAlive = true
let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard, secondCard]
sum = firstCard + secondCard
renderGame()
}

// Update the UI to reflect the current game state
function renderGame() {
cardsElement.textContent = "Cards: "
for (let i = 0; i < cards.length; i++) {
cardsElement.textContent += cards[i] + " "
}

bash
Copy code
sumElement.textContent = "Sum: " + sum
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}
messageElement.textContent = message
}

// Draw a new card and update the game state if the player is still alive
function drawCard() {
if (isAlive && !hasBlackJack) {
let card = getRandomCard()
sum += card
cards.push(card)
renderGame()
}
}

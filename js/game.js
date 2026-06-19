const hitButton = document.getElementById("hitButton");
const standButton = document.getElementById("standButton");
const splitButton = document.getElementById("splitButton");
const exitButton = document.getElementById("exitButton");

const gameMessage = document.getElementById("gameMessage");

const dealerHand = document.getElementById("dealerHand");
const dealerScore = document.getElementById("dealerScore");
const playerHand = document.getElementById("playerHand");
const playerScore = document.getElementById("playerScore");

const exitPopup = document.getElementById("exitPopup");

const saveExitButton = document.getElementById("saveExitButton");
const nosaveExitButton = document.getElementById("nosaveExitButton");
const cancelExitButton = document.getElementById("cancelExitButton");

/////////////////////////////////////////////////////////////////
// Button Functions
/////////////////////////////////////////////////////////////////

hitButton.addEventListener("click", function () {
    gameMessage.textContent = "Hit button clicked.";
});

standButton.addEventListener("click", function () {
    gameMessage.textContent = "Stand button clicked.";
});

splitButton.addEventListener("click", function () {
    gameMessage.textContent = "Split button clicked.";
});

exitButton.addEventListener("click", function () {
    exitPopup.hidden = false;
});

saveExitButton.addEventListener("click", function () {
    window.close();
});

nosaveExitButton.addEventListener("click", function () {
    window.close();
});

cancelExitButton.addEventListener("click", function () {
    exitPopup.hidden = true;
});

/////////////////////////////////////////////////////////////////
// Dealer + Player Score Display
/////////////////////////////////////////////////////////////////

const dealerCards = ["K", "?"];
const playerCards = ["10", "7"];

dealerHand.textContent = dealerCards.join(" | ");
dealerScore.textContent = "Dealer Score: 10";

playerHand.textContent = playerCards.join(" | ");
playerScore.textContent = "Player Score: 17";

gameMessage.textContent = "Game started. Good luck! 😄";

/////////////////////////////////////////////////////////////////
// Deck Creation
/////////////////////////////////////////////////////////////////

const suits = ["♥️", "♦️", "♣️", "♠️"];

const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
];

const deck = [];

for (const suit of suits) {
    for (const value of values) {
        deck.push(value + suit);
    }
}

// Tests:
console.log(deck);
console.log("Deck size:", deck.length);

/////////////////////////////////////////////////////////////////
// Shuffle/Randomize Deck
/////////////////////////////////////////////////////////////////

function shuffleDeck(deck) {

    // Start from the last card
    for (let i = deck.length - 1; i > 0; i--) {

        // Pick a random card between 0 and i
        const randomIndex = Math.floor(Math.random() * (i + 1));

        // Swap the cards
        const temporaryCard = deck[i]; // saves card temporarily
        deck[i] = deck[randomIndex]; // puts random card in current position
        deck[randomIndex] = temporaryCard; // puts temp card in random card's old position
    }
}

shuffleDeck(deck);

// Tests:
console.log(deck);
console.log("Deck size:", deck.length);
























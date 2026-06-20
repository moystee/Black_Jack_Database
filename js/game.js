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
    const newCard = deck.shift(); // takes first card fom deck

    playerCards.push(newCard); // pushes that card to player hand

    playerHand.textContent = playerCards.join(" | "); // add the | separator between cards

    playerScore.textContent = "Player Score: " + calculateScore(playerCards); // calculate new score

    const playerTotal = calculateScore(playerCards); // save value

    if (playerTotal > 21) { // display is based on new score 
        gameMessage.textContent = "Bust!";
        hitButton.disabled = true; // cannot Hit after Bust
    } else if (playerTotal === 21) {
        gameMessage.textContent = "21!";
        hitButton.disabled = true; // cannot Hit after 21
    } else {
        gameMessage.textContent = "You drew: " + newCard;
    }
    
});

standButton.addEventListener("click", function () {
    dealerHand.textContent = dealerCards.join(" | "); // gets rid of ?

    dealerScore.textContent = "Dealer Score: " + calculateScore(dealerCards); // adds mystery card

    hitButton.disabled = true; // disable Hit button
    splitButton.disabled = true; // disable Split button
    standButton.disabled = true; // disable Stand button

    while (calculateScore(dealerCards) < 17) {
        dealerCards.push(deck.shift());
    }

    dealerHand.textContent = dealerCards.join(" | ");

    dealerScore.textContent = "Dealer Score: " + calculateScore(dealerCards);

    const playerTotal = calculateScore(playerCards);
    const dealerTotal = calculateScore(dealerCards);
    
    if (dealerTotal > 21) {
        gameMessage.textContent = "Dealer busts. Player wins!";
    } else if (playerTotal > dealerTotal) {
        gameMessage.textContent = "Player wins!";
    } else if (dealerTotal > playerTotal) {
        gameMessage.textContent = "Dealer wins.";
    } else {
        gameMessage.textContent = "Push. It's a tie.";
    }
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
// console.log("Deck before shuffle:", [...deck]);
// console.log("Deck size before shuffle:", deck.length);

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
// console.log("Deck after shuffle:", [...deck]);
// console.log("Deck size after shuffle:", deck.length);

/////////////////////////////////////////////////////////////////
// Create Starting Hands
/////////////////////////////////////////////////////////////////

const playerCards = [];
const dealerCards = [];

// shift() removes and returns the first card in the deck.
playerCards.push(deck.shift()); // 1st card
dealerCards.push(deck.shift()); // 2nd card
playerCards.push(deck.shift()); // 3rd card
dealerCards.push(deck.shift()); // 4th card

playerHand.textContent = playerCards.join(" | ");
dealerHand.textContent = dealerCards[0] + " | ?";

// Tests:
// console.log("Player Cards:", playerCards);
// console.log("Dealer Cards:", dealerCards);
// console.log("Cards Remaining:", deck.length);

/////////////////////////////////////////////////////////////////
// Calculate Starting Hand Score
/////////////////////////////////////////////////////////////////

function calculateScore(cards) {
    let score = 0;
    let aceCount = 0; // counts aces = 11 by default

    for (const card of cards) {
        const value = card.replace(/[♥️♦️♣️♠️]/g, ""); // remove all suit symbols

        if (value === "A") {
            score += 11;
            aceCount++;
        } else if (value === "J" || value === "Q" || value === "K") {
            score += 10;
        } else {
            score += Number(value); // integerizes value
        }
    }

    while (score > 21 && aceCount > 0) { // if bust and has ace = 11
        score -= 10; // change ace = 11 -> 1
        aceCount--; // 1 less ace = 11
    }
    return score;
}

dealerScore.textContent = "Dealer Score: " + calculateScore([dealerCards[0]]);

const startingPlayerTotal = calculateScore(playerCards);

playerScore.textContent = "Player Score: " + startingPlayerTotal;

dealerScore.textContent = "Dealer Score: " + calculateScore([dealerCards[0]]);

if (startingPlayerTotal === 21) {
    gameMessage.textContent = "Blackjack!";
    hitButton.disabled = true;
} else {
    gameMessage.textContent = "Game started. Good luck! 😁";
}

















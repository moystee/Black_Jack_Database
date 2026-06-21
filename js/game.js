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
    // Split Button case /////////////////////////////////////////////////////////////////
    const newCard = deck.shift();

    if (activeSplitHand === 1) {
        splitHand1.push(newCard);
    } else {
        splitHand2.push(newCard);
    }
    
        updateSplitDisplay();
    
        gameMessage.textContent = "You drew a card for Hand " + activeSplitHand + ": " + newCard ;
        
        return;
    }
    ///////////////////////////////////////////////////////////////////////////////////////
    
    const newCard = deck.shift(); // takes first card fom deck

    playerCards.push(newCard); // pushes that card to player hand

    playerHand.textContent = playerCards.join(" | "); // add the | separator between cards

    playerScore.textContent = "Player Score: " + calculateScore(playerCards); // calculate new score

    const playerTotal = calculateScore(playerCards); // save value

    if (playerTotal > 21) { // display is based on new score 
        gameMessage.textContent = "Bust!";
        hitButton.disabled = true;
        standButton.disabled = true;
        splitButton.disabled = true;
    } else if (playerTotal === 21) {
        gameMessage.textContent = "21! Click Stand to finish your turn.";
        hitButton.disabled = true; // cannot Hit after 21
        splitButton.disabled = true; // cannot Split after 21
    } else {
        gameMessage.textContent = "You drew: " + newCard;
    }
});

standButton.addEventListener("click", function () {
    // Split Button case /////////////////////////////////////////////////////////////////
    if (isSplitMode && activeSplitHand === 1) {
        activeSplitHand = 2;
        gameMessage.textContent = "Now playing Hand 2.";
        return;
    }
    //////////////////////////////////////////////////////////////////////////////////////
    
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

    const playerBlackjack = playerCards.length === 2 && calculateScore(playerCards) === 21;
    const dealerBlackjack = dealerCards.length === 2 && calculateScore(dealerCards) === 21;

    // Split Button case /////////////////////////////////////////////////////////////////
    if (isSplitMode) {
        const hand1Total = calculateScore(splitHand1);
        const hand2Total = calculateScore(splitHand2);
    
        let hand1Result = "";
        let hand2Result = "";
    
        if (dealerTotal > 21 || hand1Total > dealerTotal) {
            hand1Result = "Hand 1 wins";
        } else if (dealerTotal > hand1Total) {
            hand1Result = "Hand 1 loses";
        } else {
            hand1Result = "Hand 1 pushes";
        }
    
        if (dealerTotal > 21 || hand2Total > dealerTotal) {
            hand2Result = "Hand 2 wins";
        } else if (dealerTotal > hand2Total) {
            hand2Result = "Hand 2 loses";
        } else {
            hand2Result = "Hand 2 pushes";
        }
    
        gameMessage.textContent = hand1Result + ". " + hand2Result + ".";
    
        return;
    }
    /////////////////////////////////////////////////////////////////////////////////////
    
    if (playerBlackjack && dealerBlackjack) {
        gameMessage.textContent = "Blackjack! Push. It's a tie!";
    } else if (playerBlackjack) {
        gameMessage.textContent = "Blackjack! Player wins!";
    } else if (dealerTotal > 21) {
        gameMessage.textContent = "Bust! Player wins!";
    } else if (playerTotal > dealerTotal) {
        gameMessage.textContent = "Player wins!";
    } else if (dealerTotal > playerTotal) {
        gameMessage.textContent = "Dealer wins!";
    } else {
        gameMessage.textContent = "Push. It's a tie!";
    }
});

let splitHand1 = [];
let splitHand2 = [];
let activeSplitHand = 0;
let isSplitMode = false;

splitButton.addEventListener("click", function () {

    document.getElementById("playerHandText").hidden = true;
    playerScore.hidden = true;

    document.getElementById("splitArea").hidden = false;

    splitHand1 = [playerCards[0]];
    splitHand2 = [playerCards[1]];
    activeSplitHand = 1;
    isSplitMode = true;
    
    splitHand1.push(deck.shift());
    splitHand2.push(deck.shift());
    
    document.getElementById("splitHand1").textContent =
        splitHand1.join(" | ");
    
    document.getElementById("splitHand2").textContent =
        splitHand2.join(" | ");
    
    document.getElementById("splitScore1").textContent =
        "Player Hand 1 Score: " + calculateScore(splitHand1);
    
    document.getElementById("splitScore2").textContent =
        "Player Hand 2 Score: " + calculateScore(splitHand2);

    hitButton.disabled = false;
    standButton.disabled = false;
    splitButton.disabled = true;
    gameMessage.textContent = "You know have two hands! Now playing Hand 1.";

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

if (startingPlayerTotal === 21) {
    gameMessage.textContent = "Blackjack!";
    hitButton.disabled = true;
    splitButton.disabled = true;
} else {
    gameMessage.textContent = "Game started. Good luck! 😁";
}

/////////////////////////////////////////////////////////////////
// Toggle Split Button On/Off
/////////////////////////////////////////////////////////////////

function getCardValue(card) {
    return card.replace(/[♥️♦️♣️♠️]/g, ""); 
}

if (playerCards.length === 2 && getCardValue(playerCards[0]) === getCardValue(playerCards[1])) {
    splitButton.disabled = false;
} else {
    splitButton.disabled = true;
}

/////////////////////////////////////////////////////////////////
// Split Button Score Displays
/////////////////////////////////////////////////////////////////

function updateSplitDisplay() {
    document.getElementById("splitHand1").textContent =
        splitHand1.join(" | ");

    document.getElementById("splitHand2").textContent =
        splitHand2.join(" | ");

    document.getElementById("splitScore1").textContent =
        "Player Hand 1 Score: " + calculateScore(splitHand1);

    document.getElementById("splitScore2").textContent =
        "Player Hand 2 Score: " + calculateScore(splitHand2);
}











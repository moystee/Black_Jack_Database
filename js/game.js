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

const newGameButton = document.getElementById("newGameButton");

const supabaseUrl = "https://hyaapdnhcirowtwvugji.supabase.co";
const supabaseKey = "sb_publishable_Azo3Dy_jbEb78dGL2p4TJw_sGJC4Dxm";

const database = supabase.createClient(
    supabaseUrl,
    supabaseKey
);

/////////////////////////////////////////////////////////////////
// Button Functions
/////////////////////////////////////////////////////////////////

hitButton.addEventListener("click", function () {
    // Split Button case /////////////////////////////////////////////////////////////////
    if (isSplitMode) {
        const newCard = deck.shift();
        
        if (activeSplitHand === 1) {
            splitHand1.push(newCard);
        } else {
            splitHand2.push(newCard);
        }
    
        updateSplitDisplay();
    
        if (activeSplitHand === 1) {

            const activeTotal = calculateScore(splitHand1);
        
            if (activeTotal > 21) {
                gameMessage.textContent = "Hand 1 busts! Click Stand.";   
                hitButton.disabled = true;
            }
            else if (activeTotal === 21) {
                gameMessage.textContent = "Hand 1 reached 21! Click Stand.";
            }
            else {
                gameMessage.textContent = "You drew: " + newCard + " . Click Stand to move to Player Hand 2.";
            }
        
        }
        else {
        
            const activeTotal = calculateScore(splitHand2);
        
            if (activeTotal > 21) {
                gameMessage.textContent = "Hand 2 busts! Click Stand.";
                hitButton.disabled = true;
            }
            else if (activeTotal === 21) {
                gameMessage.textContent = "Hand 2 reached 21! Click Stand.";
                hitButton.disabled = true;
            }
            else {
                gameMessage.textContent = "You drew: " + newCard;
            }
        
        }
        
        return;
    }
    ///////////////////////////////////////////////////////////////////////////////////////
    
    const newCard = deck.shift(); // takes first card fom deck

    playerCards.push(newCard); // pushes that card to player hand

    playerHand.textContent = playerCards.join(" | "); // add the | separator between cards

    playerScore.textContent = "Player Score: " + calculateScore(playerCards); // calculate new score

    const playerTotal = calculateScore(playerCards); // save value

    if (playerTotal > 21) { // display is based on new score 
        gameMessage.textContent = "Bust! Player loses!";
        saveCompletedGame("Bust! Player loses!");
        hitButton.disabled = true;
        standButton.disabled = true;
        splitButton.disabled = true;
        newGameButton.hidden = false;
    } else if (playerTotal === 21) {
        gameMessage.textContent = "21! Click Stand to finish your turn.";
        hitButton.disabled = true; // cannot Hit after 21
        splitButton.disabled = true; // cannot Split after 21
    } else {
        gameMessage.textContent = "You drew: " + newCard;
        splitButton.disabled = true;
    }
});

standButton.addEventListener("click", function () {
    // Split Button case /////////////////////////////////////////////////////////////////
    if (isSplitMode && activeSplitHand === 1) {
        activeSplitHand = 2;
        hitButton.disabled = false;
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
    
        if (hand1Total > 21) {
            hand1Result = "Hand 1 loses";
        } else if (dealerTotal > 21 || hand1Total > dealerTotal) {
            hand1Result = "Hand 1 wins";
        } else if (dealerTotal > hand1Total) {
            hand1Result = "Hand 1 loses";
        } else {
            hand1Result = "Hand 1 pushes";
        }
    
        if (hand2Total > 21) {
            hand2Result = "Hand 2 loses";
        } else if (dealerTotal > 21 || hand2Total > dealerTotal) {
            hand2Result = "Hand 2 wins";
        } else if (dealerTotal > hand2Total) {
            hand2Result = "Hand 2 loses";
        } else {
            hand2Result = "Hand 2 pushes";
        }
   
        let splitWinAdd = 0;
        let splitLossAdd = 0;
        let splitTieAdd = 0;
        
        if (hand1Result.includes("wins")) {
            splitWinAdd++;
        } else if (hand1Result.includes("loses")) {
            splitLossAdd++;
        } else {
            splitTieAdd++;
        }
        
        if (hand2Result.includes("wins")) {
            splitWinAdd++;
        } else if (hand2Result.includes("loses")) {
            splitLossAdd++;
        } else {
            splitTieAdd++;
        }
        
        gameMessage.textContent = "Player " + hand1Result + "! " + "Player " + hand2Result + "!";
        saveCompletedGame("Player " + hand1Result + "! " + "Player " + hand2Result + "!");
        updateUserStatsDirect(splitWinAdd, splitLossAdd, splitTieAdd);
        newGameButton.hidden = false;
        
        return;
    }
    /////////////////////////////////////////////////////////////////////////////////////
    
    if (playerBlackjack && dealerBlackjack) {
        gameMessage.textContent = "Blackjack! Push. It's a tie!";
        saveCompletedGame("Blackjack! Push. It's a tie!");
        newGameButton.hidden = false;
    } else if (playerBlackjack) {
        gameMessage.textContent = "Blackjack! Player wins!";
        saveCompletedGame("Blackjack! Player wins!");
        newGameButton.hidden = false;
    } else if (dealerTotal > 21) {
        gameMessage.textContent = "Bust! Player wins!";
        saveCompletedGame("Bust! Player wins!");
        newGameButton.hidden = false;
    } else if (playerTotal > dealerTotal) {
        gameMessage.textContent = "Player wins!";
        saveCompletedGame("Player wins!");
        newGameButton.hidden = false;
    } else if (dealerTotal > playerTotal) {
        gameMessage.textContent = "Dealer wins!";
        saveCompletedGame("Dealer wins!");
        newGameButton.hidden = false;
    } else {
        gameMessage.textContent = "Push. It's a tie!";
        saveCompletedGame("Push. It's a tie!");
        newGameButton.hidden = false;
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
    window.location.href = "home.html";
});

nosaveExitButton.addEventListener("click", function () {
    window.location.href = "home.html";
});

cancelExitButton.addEventListener("click", function () {
    exitPopup.hidden = true;
});

newGameButton.addEventListener("click", function () {
    location.reload();
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

/////////////////////////////////////////////////////////////////
// Test Saving to the game table w/ Hardcoded Data
/////////////////////////////////////////////////////////////////

async function testSaveGame() {

    const { data, error } = await database // Insert a new row into the games table
        .from("games") // from the games table
        .insert([  // Add a new record
            {
                user_id: "283a9c3a-f385-4a20-9f63-1976b8f31bb0",
                player_hand: "A♠ | K♦",
                dealer_hand: "9♣ | 8♥",
                result: "Player wins",
                status: "completed"
            }
        ]);

    if (error) { // error handling
        console.log("Error:", error);
    } else { // saved
        console.log("Saved:", data);
    }
}

// testSaveGame();

/////////////////////////////////////////////////////////////////
// Test Saving to the game table w/ Real Data
/////////////////////////////////////////////////////////////////

async function saveCompletedGame(resultMessage) {
    let savedPlayerHand = "";

    if (isSplitMode) {
        savedPlayerHand =
            "Hand 1: " + splitHand1.join(" | ") +
            " / Hand 2: " + splitHand2.join(" | ");
    } else {
        savedPlayerHand = playerCards.join(" | ");
    }

    const { data, error } = await database
        .from("games")
        .insert([
            {
                user_id: "283a9c3a-f385-4a20-9f63-1976b8f31bb0",
                player_hand: savedPlayerHand,
                dealer_hand: dealerCards.join(" | "),
                result: resultMessage,
                status: "completed"
            }
        ]);

    if (error) {
        console.log("Error saving completed game:", error);
    } else {
        console.log("Completed game saved:", data);
    }
}

/////////////////////////////////////////////////////////////////
// Test Saving to the users stats table w/ Real Data
/////////////////////////////////////////////////////////////////

async function updateUserStatsDirect(winAdd, lossAdd, tieAdd) {
    const { data, error } = await database
        .from("user_stats")
        .select("*")
        .eq("user_id", localStorage.getItem("user_id"))
        .single();

    if (error) {
        console.log("Error getting stats:", error);
        return;
    }

    const { error: updateError } = await database
        .from("user_stats")
        .update({
            wins: data.wins + winAdd,
            losses: data.losses + lossAdd,
            ties: data.ties + tieAdd,
            games_played: data.games_played + 1,
            updated_at: new Date().toISOString()
        })
        .eq("user_id", localStorage.getItem("user_id"));

    if (updateError) {
        console.log("Error updating stats:", updateError);
    } else {
        console.log("Stats updated.");
    }
}




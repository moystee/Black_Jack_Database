const hitButton = document.getElementById("hitButton");
const standButton = document.getElementById("standButton");
const splitButton = document.getElementById("splitButton");
const exitButton = document.getElementById("exitButton");

const gameMessage = document.getElementById("gameMessage");

const dealerHand = document.getElementById("dealerHand");
const dealerScore = document.getElementById("dealerScore");
const playerHand = document.getElementById("playerHand");
const playerScore = document.getElementById("playerScore");

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
    gameMessage.textContent = "Exit button clicked.";
});

/////////////////////////////////////////////////////////////////

const dealerCards = ["K", "?"];
const playerCards = ["10", "7"];

dealerHand.textContent = dealerCards.join(" | ");
dealerScore.textContent = "Dealer Score: 10";

playerHand.textContent = playerCards.join(" | ");
playerScore.textContent = "Player Score: 17";

gameMessage.textContent = "Game started. Good luck! 😄";









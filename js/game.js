const hitButton = document.getElementById("hitButton");
const standButton = document.getElementById("standButton");
const splitButton = document.getElementById("splitButton");
const exitButton = document.getElementById("exitButton");

const gameMessage = document.getElementById("gameMessage");

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

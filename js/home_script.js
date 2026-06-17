const startButton = document.getElementById("startGameButton");
const joinButton = document.getElementById("joinGameButton");
const message = document.getElementById("message");

startButton.addEventListener("click", function () {
    message.textContent = "Starting game...";
});

joinButton.addEventListener("click", function () {
    message.textContent = "No existing games found. Please start a new game.";
});

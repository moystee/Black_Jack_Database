const startButton = document.getElementById("startGameButton");
const joinButton = document.getElementById("joinGameButton");
const message = document.getElementById("message");

startButton.addEventListener("click", function () {
    message.textContent = "Starting game...";
    window.open("game.html", "_blank");
});

joinButton.addEventListener("click", function () {
    message.textContent = "No existing games found. Please start a new game.";
});

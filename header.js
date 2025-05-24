const colorTurn = document.querySelector(".move-message");

function changeTurn() {
  colorTurn.textContent = (currentTurn == "w" ? "White" : "Black") + " to move";
}
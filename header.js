const colorTurn = document.querySelector(".move-message");

function changeTurn() {
  colorTurn.textContent =
    (currentTurn === "w" ? "White" : "Black") + " to move";
  if (vsBot && currentTurn === "b") {
    setTimeout(robotMoves, 1000);
    startTimer();
  }
}

const radioButtons = document.querySelectorAll('input[name="min"]');

// selecting the time value from the radio buttons
radioButtons.forEach((radio) => {
  radio.addEventListener("change", () => {
    const timeValue = radio.value;
    timeDisplayWhite.textContent = timeValue + ":00";
    timeDisplayBlack.textContent = timeValue + ":00";
  });
});

const colorTurn = document.querySelector(".move-message");

function changeTurn() {
  colorTurn.textContent = (currentTurn === "w" ? "White" : "Black") + " to move";
}


const radioButtons = document.querySelectorAll('input[name="min"]');

// selecting the time value from the radio buttons
radioButtons.forEach(radio => {
  radio.addEventListener('change', () => {
    const timeValue = radio.value;
    timeDisplayWhite.textContent = timeValue + ":00";
    timeDisplayBlack.textContent = timeValue + ":00";
  })
})
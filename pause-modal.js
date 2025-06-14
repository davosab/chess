const pauseModal = document.querySelector(".pause-modal");
const resignModal = document.querySelector(".resign-modal");
const pauseButton = document.querySelector(".pause-button");
const closeButton = document.querySelector(".close-button");
const resignButton = document.querySelector(".resign-button");
const continueButton = document.querySelector(".continue-button");
const drawButton = document.querySelector(".draw-button");
const drawModalText = document.querySelector(".draw-text");
const player1Input = document.querySelector("[data-p1-name-input]");
const player2Input = document.querySelector("[data-p2-name-input]");

const closePauseModal = function () {
  pauseModal.classList.toggle("hidden");
  pauseModal.close();
};

// Opening modal when Pause button is clicked
pauseButton.addEventListener("click", function () {
  pauseModal.classList.remove("hidden");
  pauseModal.showModal();
  if (vsBot) drawButton.remove();
  clearInterval(intervalId);
});

// Closing modal when "X" button is clicked
closeButton.addEventListener("click", function () {
  closePauseModal();
  startTimer();
});

// Closing modal when "ESC" key is clicked
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !pauseModal.classList.contains("hidden")) {
    closePauseModal();
    startTimer();
  }
});

// Closing modal when outside of the modal is clicked
document.addEventListener("click", function (e) {
  if (e.target === pauseModal) {
    closePauseModal();
    startTimer();
  }
});

// Going back to the game when the "Continue button" is clicked
continueButton.addEventListener("click", function () {
  closePauseModal();
  startTimer();
});

// Draw modal pops-up when "Offer a draw" is clicked
drawButton.addEventListener("click", function () {
  closePauseModal();
  drawModal.classList.remove("hidden");
  drawModal.showModal();
  if (currentTurn === "w") {
    drawModalText.innerHTML =
      p1Name.innerHTML + " offered you a draw.<br>Do you accept it?";
  } else {
    drawModalText.innerHTML =
      p1Name.innerHTML + " offered you a draw.<br>Do you accept it?";
  }
});

// Resign Modal pops up when Resign is clicked
resignButton.addEventListener("click", function () {
  closePauseModal();
  resignModal.classList.remove("hidden");
  resignModal.showModal();
});

// When pressed ESC no dialog will go up
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const openModals = document.querySelectorAll("dialog[open]");
    if (openModals.length > 0) {
      event.preventDefault(); // Blochează închiderea oricărui modal deschis
    }
  }
});

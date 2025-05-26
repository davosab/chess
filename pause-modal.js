const pauseModal = document.querySelector(".pause-modal");
const pauseButton = document.querySelector(".pause-button");
const closeButton = document.querySelector(".close-button");
const continueButton = document.querySelector(".continue-button");

const closePauseModal = function () {
  pauseModal.classList.toggle("hidden");
  pauseModal.close();
};

// Opening modal when Pause button is clicked
pauseButton.addEventListener("click", function () {
  pauseModal.classList.remove("hidden");
  pauseModal.showModal();
  clearInterval(intervalId);
});

// Closing modal when "X" button is clicked
closeButton.addEventListener("click", function () {
  closePauseModal();
  startTimer()
});

// Closing modal when "ESC" key is clicked
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !pauseModal.classList.contains("hidden")){
    closePauseModal();
    startTimer();
  }
});

// Closing modal when outside of the modal is clicked
document.addEventListener("click", function (e) {
  if (e.target === pauseModal) {
    closePauseModal();
    startTimer()
  }
});

// Going back to the game when the "Continue button" is clicked

continueButton.addEventListener('click', function () {
    closePauseModal();
    startTimer();
}) 
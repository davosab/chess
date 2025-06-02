const drawModal = document.querySelector(".draw-modal");
const drawGameModal = document.querySelector(".draw-game-modal");
const drawYesButton = document.querySelector(".draw-yes-button");
const drawNoButton = document.querySelector(".draw-no-button");

const closeDrawModal = function () {
  drawModal.classList.toggle("hidden");
  drawModal.close();
};

// If yes, then a modal pops up and says that the game ended in a draw
drawYesButton.addEventListener("click", function () {
  closeDrawModal();
  drawGameModal.classList.remove("hidden");
  drawGameModal.showModal();
});

// If no, the modal closes and the game continues
drawNoButton.addEventListener("click", function () {
  closeDrawModal();
  startTimer();
});

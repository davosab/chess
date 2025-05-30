const playAgainYesButton = document.querySelector(".play-again-yes-button");
const playAgainNoButton = document.querySelector(".play-again-no-button");
const settingsModal = document.querySelector("[data-settings-modal]");
const finishedGameModal = document.querySelector(".finished-game-modal");
const startGameModal = document.querySelector(".start-game");

const closeGameDrawModal = function () {
  drawGameModal.classList.toggle("hidden");
  drawGameModal.close();
};

// if player presses "yes" a modal with the option to start a new game pops up
playAgainYesButton.addEventListener("click", function () {
  closeGameDrawModal();
  startGameModal.classList.remove("hidden");
  startGameModal.showModal();
});

// If player presses "no" then a modal pops up saying thx for playing
playAgainNoButton.addEventListener("click", function () {
  closeGameDrawModal();
  finishedGameModal.classList.remove("hidden");
  finishedGameModal.showModal();
});



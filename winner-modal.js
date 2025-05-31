const winnerYesButton = document.querySelector(".winner-yes-button");
const winnerNoButton = document.querySelector(".winner-no-button");
const closeWinnerModal = function () {
  winnerModal.classList.toggle('hidden');
  winnerModal.close();
};

// If player presses "Yes", then the starting Game modal pops up
winnerYesButton.addEventListener('click', function () {
  closeWinnerModal();
  startGameModal.classList.remove('hidden');
  startGameModal.showModal();
});

// If player presses "no" then a modal pops up saying thx for playing
winnerNoButton.addEventListener('click', function () {
  closeWinnerModal();
  finishedGameModal.classList.remove("hidden");
  finishedGameModal.showModal();
});
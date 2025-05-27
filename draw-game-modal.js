const playAgainYesButton = document.querySelector('.play-again-yes-button');
const playAgainNoButton = document.querySelector('.play-again-no-button');

const closeGameDrawModal = function() {
    drawGameModal.classList.toggle("hidden");
    drawGameModal.close();
};

playAgainYesButton.addEventListener('click', function() {
    closeGameDrawModal();
 });


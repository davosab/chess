const playAgainYesButton = document.querySelector('.play-again-yes-button');
const playAgainNoButton = document.querySelector('.play-again-no-button');
const settingsModal = document.querySelector("[data-settings-modal]");
const finishedGameModal = document.querySelector(".finished-game-modal");

const closeGameDrawModal = function() {
    drawGameModal.classList.toggle("hidden");
    drawGameModal.close();
};

playAgainYesButton.addEventListener('click', function() {
    closeGameDrawModal();
    settingsModal.classList.remove("hidden");
    settingsModal.classList.add("flex");
    settingsModal.showModal();
 });

 playAgainNoButton.addEventListener('click', function() {
    closeGameDrawModal();
    finishedGameModal.classList.remove('hidden');
    finishedGameModal.showModal();
 })


// const startGameButton = document.querySelector('.start-new-game-button');
//
// const robotButton = document.querySelector('.robot-button');
const robotModal = document.querySelector('.robot-modal')
const startModal = document.querySelector('.start-game');
const vsPlayerButton = document.querySelector('.player-player-button');
const vsRobotButton = document.querySelector('.player-robot-button');
const playerModal = document.querySelector('.player-modal');



const closeStartModal = function() {
    startModal.classList.toggle('hidden');
    startModal.close();
}

const openStartModal = function() {
    startModal.classList.remove('hidden');
    startModal.showModal();
}

//The modal pops up when the page is loaded
window.addEventListener('DOMContentLoaded' , function() {
    openStartModal();
})

//IF  player vs player then a settings modal for 2 p;ayers pops up
vsPlayerButton.addEventListener('click', function() {
    closeStartModal();
    playerModal.classList.remove('hidden');
    playerModal.showModal();
})

//IF  player vs bot then a settings modal for 1 player pops up
vsRobotButton.addEventListener('click', function() {
    closeStartModal();
    openRobotModal();
})

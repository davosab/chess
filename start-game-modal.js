const startGameButton = document.querySelector('.start-new-game-button');
const p1Name = document.querySelector("[data-p1-name]");
const p2Name = document.querySelector("[data-p2-name]");
const p1NameInput = document.querySelector("[data-p1-name-input]");
const p2NameInput = document.querySelector("[data-p2-name-input]");
const robotButton = document.querySelector('.robot-button');
const robotModal = document.querySelector('.robot-modal')


const closeStartGameModal = function() {
    startGameModal.classList.toggle('hidden');
    startGameModal.close();
}

const openStartGameModal = function() {
    startGameModal.classList.remove('hidden');
    startGameModal.showModal();
}
//The modal pops up when the page is loaded
window.addEventListener('DOMContentLoaded' , function() {
    openStartGameModal();
})


// if the start button is pressed, everything starts
startGameButton.addEventListener('click', function() {
     if (p1NameInput.value.trim() == "" || 
      p2NameInput.value.trim() == "") {
      
      alert("Player names must not be empty!");
      return;
    }
    p1Name.innerHTML = p1NameInput.value;
    p2Name.innerHTML = p2NameInput.value;

   const timeInput = document.querySelector('input[name="min"]:checked') 
    blackTime = parseInt(timeInput.value * 60);
    whiteTime = parseInt(timeInput.value * 60);
    selectedPiece = null;
    currentTurn = 'w';
    colorTurn.textContent = "White to move";
    initBoard();
    setColours();
    closeStartGameModal();
    timeDisplayWhite.textContent = formatTime(whiteTime);
    timeDisplayBlack.textContent = formatTime(blackTime);
    startTimer();
});

// if robot button is pressed, modal with settings for game vs robot pops up
robotButton.addEventListener('click', function() {
    closeStartGameModal();
    robotModal.classList.remove('hidden');
    robotModal.showModal();

})
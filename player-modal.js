const playerCancel = document.querySelector('.player-cancel-game-button');
const playerStart = document.querySelector('.player-start-game-button');
const p1Name = document.querySelector("[data-p1-name]");
const p2Name = document.querySelector("[data-p2-name]");
const p1PlayerNameInput = document.querySelector("[data-player-p1-name-input]");
const p2PlayerNameInput = document.querySelector("[data-player-p2-name-input]");


const closePlayerModal = function() {
    playerModal.classList.toggle('hidden');
    playerModal.close();
}

playerCancel.addEventListener("click", function () {
  closePlayerModal();
  openStartModal();
});

playerStart.addEventListener("click", function() {
    if (p1PlayerNameInput.value.trim() == "" || 
      p2PlayerNameInput.value.trim() == "") {
      alert("Player names must not be empty!");
      return;
    }
    p1Name.innerHTML = p1PlayerNameInput.value;
    p2Name.innerHTML = p2PlayerNameInput.value;
   const timeInput = document.querySelector('input[name="min"]:checked') 
    blackTime = parseInt(timeInput.value * 60);
    whiteTime = parseInt(timeInput.value * 60);
    selectedPiece = null;
    currentTurn = 'w';
    colorTurn.textContent = "White to move";
    initBoard();
    setColours();
    closePlayerModal();
    timeDisplayWhite.textContent = formatTime(whiteTime);
    timeDisplayBlack.textContent = formatTime(blackTime);
    startTimer();
});

const robotCancel = document.querySelector('.robot-cancel-button');
const robotStart = document.querySelector('.robot-start-button');


const closeRobotModal = function() {
  robotModal.classList.toggle('hidden');
    robotModal.close();
}


robotCancel.addEventListener('click', function() {
  closeRobotModal();
  openStartGameModal();
})

robotStart.addEventListener('click', function() {
      if (p1NameInput.value.trim() == "") {
      
      alert("Player name must not be empty!");
      return;
    }
    p1Name.innerHTML = p1NameInput.value;
    p2Name.innerHTML = "🤖ChessBot"
   const timeInput = document.querySelector('input[name="min"]:checked') 
    blackTime = parseInt(timeInput.value * 60);
    whiteTime = parseInt(timeInput.value * 60);
    selectedPiece = null;
    currentTurn = 'w';
    colorTurn.textContent = "White to move";
    initBoard();
    setColours();
    closeRobotModal();
    timeDisplayWhite.textContent = formatTime(whiteTime);
    timeDisplayBlack.textContent = formatTime(blackTime);
    startTimer();
})
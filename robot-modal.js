const robotCancel = document.querySelector(".robot-cancel-button");
const robotStart = document.querySelector(".robot-start-button");
const robotText = document.querySelector(".robot-text");
const p1RobotNameInput = document.querySelector("[data-robot-p1-name-input]");

let vsBot = false;

const closeRobotModal = function () {
  robotModal.classList.toggle("hidden");
  robotModal.close();
};

const openRobotModal = function () {
  robotModal.classList.remove("hidden");
  robotModal.showModal();
};

// If cancel button is pressed, the robot modal closes and the Default starting game modal pops up
robotCancel.addEventListener("click", function () {
  if (!vsBot) {
    closeRobotModal();
    openStartModal();
  } else {
    closeRobotModal();
    startTimer();
  }
});

// If the start nw game button is pressed, a new game vs the robot starts
robotStart.addEventListener("click", function () {
  if (p1RobotNameInput.value.trim() == "") {
    alert("Player name must not be empty!");
    return;
  }
  p1Name.innerHTML = p1RobotNameInput.value;
  p2Name.innerHTML = "🤖ChessBot";
  const timeInput = document.querySelector('input[name="min"]:checked');
  blackTime = parseInt(timeInput.value * 60);
  whiteTime = parseInt(timeInput.value * 60);
  selectedPiece = null;
  currentTurn = "w";
  vsBot = true;
  colorTurn.textContent = "White to move";
  initBoard();
  setColours();
  closeRobotModal();
  timeDisplayWhite.textContent = formatTime(whiteTime);
  timeDisplayBlack.textContent = formatTime(blackTime);
  startTimer();
});

// robot makes random move
const robotMoves = function () {
  if (vsBot) {
    const botColour = "b";
    const botMoves = [];

    for (let row of board) {
      for (let piece of row) {
        if (piece && piece.colour === botColour) {
          const moves = piece.getPossibleMoves(board);
          for (let move of moves) {
            botMoves.push({ piece, move });
          }
        }
      }
    }

    if (botMoves.length === 0) return;

    const randomMove = Math.floor(Math.random() * botMoves.length);
    const { piece, move } = botMoves[randomMove];
    setTimeout(() => {
      piece.moveTo(move.row, move.col);
    }, 300);
  }
};

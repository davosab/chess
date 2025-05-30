
const startingMinutes = parseInt(document.querySelector('input[name="min"]:checked').value);
let whiteTime = startingMinutes * 60;
let blackTime = startingMinutes * 60;

const timeDisplayWhite = document.querySelector(".white-time");
const timeDisplayBlack = document.querySelector(".black-time");
let intervalId = null;

// Timers decrease
function updateTimers() {
  if (currentTurn === "w") {
    if (whiteTime > 0) {
      whiteTime--;
    } else {
      clearInterval(intervalId);
      return;
    }
  } else {
    if(blackTime > 0) {
      blackTime--;
    } else {
      clearInterval(intervalId);
      return;
    }
  }

  timeDisplayWhite.innerHTML = formatTime(whiteTime);
  timeDisplayBlack.innerHTML = formatTime(blackTime);
}
// Formats time to mm:ss format
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return `${minutes}:${seconds}`;
}

// makes the timer work
function startTimer() {
  if(intervalId) clearInterval(intervalId);
  intervalId = setInterval(updateTimers, 1000);
}

// Every time that a move is played, the turn switches
function switchTurn() {
  currentTurn = (currentTurn === "w") ? "b" : "w";
  changeTurn();
  startTimer();
}
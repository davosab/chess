
const startingMinutes = parseInt(document.querySelector('input[name="min"]:checked').value);
let whiteTime = startingMinutes * 60;
let blackTime = startingMinutes * 60;

const countdownWhite = document.querySelector(".white-time");
const countdownBlack = document.querySelector(".black-time");
let intervalId = null;

// Timers decrease
function updateTimers() {
    console.log(currentTurn, whiteTime, blackTime)
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

  countdownWhite.innerHTML = formatTime(whiteTime);
  countdownBlack.innerHTML = formatTime(blackTime);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return `${minutes}:${seconds}`;
}

function startTimer() {
  if(intervalId) clearInterval(intervalId);
  intervalId = setInterval(updateTimers, 1000);
}

function switchTurn() {
  currentTurn = (currentTurn === "w") ? "b" : "w";
  changeTurn();
  startTimer();
}
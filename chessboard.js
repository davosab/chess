const chessTableCols = 8;
const chessTableRows = 8;

function setup() {
  createCanvas(600, 600);
  initBoard();
  textAlign(CENTER, CENTER);
  textSize(55);
}

function draw() {
  background("gray");
  initSquares(chessTableCols, chessTableRows);
  drawSquares(chessTableCols, chessTableRows);
}

function initBoard() {
    board = [
      ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
      ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
      ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
    ];
  }

function initSquares(cols, rows) {
  let s = 75;
  let x = 0;
  let y = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if ((i + j) % 2 == 0) {
        fill("white");
      } else {
        fill("gray");
      }
      rect(x + j * s, y + i * s, s, s);
    }
  }
}

function drawSquares(rows, cols) {
  let s = 75;
  let x = 0;
  let y = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let piece = board[i][j];
      if (piece != "") {
        fill(0);
        text(piece, x + j * s + s / 2, y + i * s + s / 2);
      }
    }
  }
}

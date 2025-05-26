let selectedPiece;
let currentTurn = "w";


let colourForWhite = "#ffffff";
let colourForBlack = "#808080";

let canvasWidth = 500;
let canvasHeight = canvasWidth;
let s = canvasWidth / 8;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  initBoard();
  textAlign(CENTER, CENTER);
  textSize(s - 20);

  currentTurn = "w";
  changeTurn();
  startTimer()
}

function draw() {
  drawSquares();
  drawPieces();
}

function initBoard() {
  board = [
    [
      new Rook("b", 0, 0),
      new Knight("b", 0, 1),
      new Bishop("b", 0, 2),
      new Queen("b", 0, 3),
      new King("b", 0, 4),
      new Bishop("b", 0, 5),
      new Knight("b", 0, 6),
      new Rook("b", 0, 7),
    ],
    [
      new Pawn("b", 1, 0),
      new Pawn("b", 1, 1),
      new Pawn("b", 1, 2),
      new Pawn("b", 1, 3),
      new Pawn("b", 1, 4),
      new Pawn("b", 1, 5),
      new Pawn("b", 1, 6),
      new Pawn("b", 1, 7),
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      new Pawn("w", 6, 0),
      new Pawn("w", 6, 1),
      new Pawn("w", 6, 2),
      new Pawn("w", 6, 3),
      new Pawn("w", 6, 4),
      new Pawn("w", 6, 5),
      new Pawn("w", 6, 6),
      new Pawn("w", 6, 7),
    ],
    [
      new Rook("w", 7, 0),
      new Knight("w", 7, 1),
      new Bishop("w", 7, 2),
      new Queen("w", 7, 3),
      new King("w", 7, 4),
      new Bishop("w", 7, 5),
      new Knight("w", 7, 6),
      new Rook("w", 7, 7),
    ],
  ];
}

function drawSquares() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 == 0) {
        fill(colourForWhite);
      } else {
        fill(colourForBlack);
      }
      rect(j * s, i * s, s, s);

      // Draws selectedPiece's possible moves at all times
      if (selectedPiece != null) {
        // current square
        if (selectedPiece.row == i && selectedPiece.col == j) {
          fill("#ffd477cc");
          rect(j * s, i * s, s, s);
        }
        for (const move of selectedPiece.getPossibleMoves(board)) {
          if (move.row == i && move.col == j) {
            fill("#ffe8b599");
            rect(j * s, i * s, s, s);

            // circle settings
            push();
            stroke("#00000000");
            fill("#00000020");
            circle(j * s + 0.5 * s, i * s + 0.5 * s, s * 0.4);
            pop();
          }
        }
      }
    }
  }
}

function drawPieces() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let piece = board[i][j];
      if (piece != null) {
        fill(0);
        text(piece.icon, j * s + s / 2, i * s + s / 2);
      }
    }
  }
}

function mousePressed() {
  let row = Math.floor(mouseY / s);
  let col = Math.floor(mouseX / s);
  const clickedPiece = board[row][col];

  if (row < 0 || row > 7 || col < 0 || col > 7) return;

  if (selectedPiece) {
    // if empty space or enemy piece, move there, else: new selected piece
    if (clickedPiece == null || selectedPiece.colour != clickedPiece.colour) {
      selectedPiece.moveTo(row, col);
    } else if (clickedPiece == currentTurn) {
      selectedPiece = clickedPiece;
    } else {
      selectedPiece = clickedPiece;
    }
  } else {
    if (clickedPiece != null && clickedPiece.colour == currentTurn) {
      selectedPiece = clickedPiece;
    }
  }
}
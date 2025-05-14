const selectedPiece = { row: null, col: null, p: null };
const previousPiece = { row: null, col: null };

let canvasWidth = 500;
let canvasHeight = canvasWidth;
let s = canvasWidth / 8;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  initBoard();
  textAlign(CENTER, CENTER);
  textSize(s - 20);
}

function draw() {
  background("gray");
  drawSquares();
  drawPieces();
  drawPossibleMoves();
}

function initBoard() {
  colourForWhite = "#ffffff";
  colourForBlack = "#808080";
  board = [
    [
      new Rook("b", 0, 0),
      new Knight("b", 0, 1),
      new Bishop("b", 0, 2),
      new Queen("b", 0, 3),
      null,
      new Bishop("b", 0, 5),
      new Knight("b", 0, 6),
      new Rook("b", 0, 7),
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      new Rook("w", 7, 0),
      new Knight("w", 7 , 1),
      new Bishop("w", 7, 2),
      new Queen("w", 7, 3),
      null,
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
    }
  }
}

function drawPieces() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let piece = board[i][j];
      if (piece != null) {
        fill(0);
        text(piece.getIcon(), j * s + s / 2, i * s + s / 2);
      }
    }
  }
}

function drawPossibleMoves() {
  if (selectedPiece.p != null) {
    const possibleMoves = selectedPiece.p.getPossibleMoves(
      selectedPiece.row,
      selectedPiece.col,
      board
    );
    selectedPiece.p.colourSquares(possibleMoves);
  }
}

function mousePressed() {
  let row = Math.floor(mouseY / s);
  let col = Math.floor(mouseX / s);

  if (row < 0 || row > 7 || col < 0 || col > 7) return;

  if (selectedPiece.p == null || selectedPiece.p == "") {
    selectedPiece.p = board[row][col];
    selectedPiece.row = row;
    selectedPiece.col = col;
  } else {
    if (board[row][col] == "") {
      board[row][col] = selectedPiece.p;
      if (
        previousPiece.row != null ||
        previousPiece.row != row ||
        previousPiece.col != col
      ) {
        board[previousPiece.row][previousPiece.col] = "";
      }
    } else {
      selectedPiece.p = board[row][col];
      selectedPiece.row = row;
      selectedPiece.col = col;
    }
  }
  previousPiece.row = row;
  previousPiece.col = col;
}

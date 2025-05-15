// const selectedPiece = { row: null, col: null, p: null };
// const previousPiece = { row: null, col: null };

let selectedPiece;
let previousPiece;

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
  // background("gray");
  drawSquares();
  drawPieces();
}

function initBoard() {
  colourForWhite = "#ffffff";
  colourForBlack = "#808080";
  board = [
    [
      new Rook("b", 0, 0),
      new Knight("b", 0, 1),
      new Bishop("b", 0, 2),
      null,//new Queen("b", 0, 3),
      null,
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
      new Pawn("b", 1, 7)
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
      new Pawn("w", 6, 7)
    ],
    [
      new Rook("w", 7, 0),
      new Knight("w", 7, 1),
      new Bishop("w", 7, 2),
      null,//new Queen("w", 7, 3),
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

      // Draws selectedPiece's possible moves at all times
      if (selectedPiece != null) {
        // current square
        if (selectedPiece.row == i && selectedPiece.col == j) {
            fill("#ffd477cc");
            rect(j * s, i * s, s, s);
        }
        for (const move of selectedPiece.getPossibleMoves()) {
          if (move[0] == i && move[1] == j) {
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

  if (row < 0 || row > 7 || col < 0 || col > 7) return;

  selectedPiece = board[row][col];

  // if (selectedPiece.p == null || selectedPiece.p == "") {
  //   selectedPiece.p = board[row][col];
  //   selectedPiece.row = row;
  //   selectedPiece.col = col;
  // } else {
  //   if (board[row][col] == "") {
  //     board[row][col] = selectedPiece.p;
  //     if (
  //       previousPiece.row != null ||
  //       previousPiece.row != row ||
  //       previousPiece.col != col
  //     ) {
  //       board[previousPiece.row][previousPiece.col] = "";
  //     }
  //   } else {
  //     selectedPiece.p = board[row][col];
  //     selectedPiece.row = row;
  //     selectedPiece.col = col;
  //   }
  // }
  // previousPiece.row = row;
  // previousPiece.col = col;
}

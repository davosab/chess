class Rook extends Piece {
moves = [
  // Moves to left
  [0, -1],
  [0, -2],
  [0, -3],
  [0, -4],
  [0, -5],
  [0, -6],
  [0, -7],
  // Moves to right
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [0, 6],
  [0, 7],
  // Moves up
  [1, 0],
  [2, 0],
  [3, 0],
  [4, 0],
  [5, 0],
  [6, 0],
  [7, 0],
  // Moves down
  [-1, 0],
  [-2, 0],
  [-3, 0],
  [-4, 0],
  [-5, 0],
  [-6, 0],
  [-7, 0],

]

    constructor(colour, row, col) {
        super(colour, row, col);
        this.icon = (colour === "w") ? "♖" : "♜" ;
    }

    getIcon() {
       return this.icon;
    };
  }
  //   getPossibleMoves(row, col, board) {
  //   let rookPossibleMoves = [];

  //       // Possible Moves to right
  //       for (let c = col + 1; c < 8; c++) {
  //     if (board[row][c] === null) rookPossibleMoves.push({ row, col: c });
  //     else break;
  //   }

  //   // Possible Moves to Left
  //   for (let c = col - 1; c >= 0; c--) {
  //     if (board[row][c] === null) rookPossibleMoves.push({ row, col: c });
  //     else break;
  //   }

  //   // Possible Moves Up
  //    for (let r = row - 1; r >= 0; r--) {
  //     if (board[r][col] === null) rookPossibleMoves.push({ row: r, col });
  //     else break;
  //   }

  //   // Possible Moves Down
  //   for (let r = row + 1; r < 8; r++) {
  //     if (board[r][col] === null) rookPossibleMoves.push({ row: r, col });
  //     else break;
  //   }
  //       return rookPossibleMoves;
  //   }


  // }

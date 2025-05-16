class Bishop extends Piece {
  moves = [
   // Up-right
    [-1, 1],
    [-2, 2],
    [-3, 3],
    [-4, 4],
    [-5, 5],
    [-6, 6],
    [-7, 7],
    // Up-left
    [-1, -1],
    [-2, -2],
    [-3, -3],
    [-4, -4],
    [-5, -5],
    [-6, -6],
    [-7, -7],
    // Down-right
    [1, -1],
    [2, -2],
    [3, -3],
    [4, -4],
    [5, -5],
    [6, -6],
    [7, -7],
    // Down-left
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6],
    [7, 7],
  ]
  constructor(colour, row, col) {
    super(colour, row, col);
    this.icon = colour === "w" ? "♗" : "♝";
  }

  getIcon() {
    return this.icon;
  }
}

// getPossibleMoves(row, col, board) {
//   const bishopPossibleMoves = [];

//   // Up-Right
//   for (let r = row - 1, c = col + 1; r >= 0 && c < 8; r--, c++) {
//     if (board[r][c] === null) bishopPossibleMoves.push({ row: r, col: c });
//   else break;
//   }

//   // Up-Left
//   for (let r = row - 1, c = col - 1; r >= 0 && c >= 0; r--, c--) {
//     if (board[r][c] === null) bishopPossibleMoves.push({ row: r, col: c });
//      else break;
    
//   }

//   // Down-Right
//   for (let r = row + 1, c = col + 1; r < 8 && c < 8; r++, c++) {
//     if (board[r][c] === null) bishopPossibleMoves.push({ row: r, col: c });
//     else break;
//   }
//   // Diagonală jos-stânga
//   for (let r = row + 1, c = col - 1; r < 8 && c >= 0; r++, c--) {
//     if (board[r][c] === null) bishopPossibleMoves.push({ row: r, col: c });
//        else break;
//   }

//   return bishopPossibleMoves;
// }

  
// }



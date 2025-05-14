class Bishop extends Piece {
  constructor(colour) {
    super();
    this.colour = colour;
    this.icon = colour === "w" ? "♗" : "♝";
  }

  getIcon() {
    return this.icon;
  }
getPossibleMoves(row, col, board) {
  const bishopPossibleMoves = [];

  // Up-Right
  for (let r = row - 1, c = col + 1; r >= 0 && c < 8; r--, c++) {
    if (board[r][c] === null) bishopPossibleMoves.push({ row: r, col: c });
  else break;
  }

  // Up-Left
  for (let r = row - 1, c = col - 1; r >= 0 && c >= 0; r--, c--) {
    if (board[r][c] === null) bishopPossibleMoves.push({ row: r, col: c });
     else break;
    
  }

  // Down-Right
  for (let r = row + 1, c = col + 1; r < 8 && c < 8; r++, c++) {
    if (board[r][c] === null) bishopPossibleMoves.push({ row: r, col: c });
    else break;
  }
  // Diagonală jos-stânga
  for (let r = row + 1, c = col - 1; r < 8 && c >= 0; r++, c--) {
    if (board[r][c] === null) bishopPossibleMoves.push({ row: r, col: c });
       else break;
  }

  return bishopPossibleMoves;
}

  
}



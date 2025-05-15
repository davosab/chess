class Queen extends Piece {
  constructor(colour, row, col) {
    super(colour, row, col);
    this.icon = colour === "white" ? "♕" : "♛";
  }

  getIcon() {
    return this.icon;
  }

  getPossibleMoves(row, col, board) {
    const rookMoves = new Rook(this.colour).getPossibleMoves(row, col, board);
    const bishopMoves = new Bishop(this.colour).getPossibleMoves(
      row,
      col,
      board
    );

    return rookMoves.concat(bishopMoves);
  }
}

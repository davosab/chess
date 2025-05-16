class Queen extends Piece {
  constructor(colour, row, col) {
    super(colour, row, col);
    this.icon = colour === "white" ? "♕" : "♛";
    const rook = new Rook();
    const bishop = new Bishop();

    this.moves = [...rook.moves, ...bishop.moves]
 }

  getIcon() {
    return this.icon;
  }
}
//   getPossibleMoves(row, col, board) {
//     const rookMoves = new Rook(this.colour).getPossibleMoves(row, col, board);
//     const bishopMoves = new Bishop(this.colour).getPossibleMoves(
//       row,
//       col,
//       board
//     );

//     return rookMoves.concat(bishopMoves);
//   }
// }

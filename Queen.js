class Queen extends Piece {
  #icon;

  constructor(colour, row, col) {
    super(colour, row, col);
    this.#icon = (colour == "w") ? "♕" : "♛";
    const rook = new Rook();
    const bishop = new Bishop();

    this.moves = [...rook.moves, ...bishop.moves]
 }

  get icon() {
    return this.#icon;
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

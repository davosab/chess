class Queen extends Piece {
  #icon;

  constructor(colour, row, col) {
    super(colour, row, col);
    this.#icon = (colour == "w") ? "♕" : "♛";
    const rook = new Rook();
    const bishop = new Bishop();

    this.directions = [...rook.directions, ...bishop.directions]
 }

  get icon() {
    return this.#icon;
  }
}

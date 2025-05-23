class Pawn extends Piece {
  #icon;
  #hasMoved = false;

  directions = [
    {row: 1, col: 0}
  ];

  constructor(colour, row, col) {
    super(colour, row, col);
    this.#icon = (colour == "w") ? "♙" : "♟";

    if (colour == "w") this.directions[0].row *= -1;
  }

  get icon() {
    return this.#icon;
  }

}
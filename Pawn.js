class Pawn extends Piece {
  #icon;
  #hasMoved = false;

  directions = [
    {row: 1, col: 0}, 
    {row: 2, col: 0}
  ];

  constructor(colour, row, col) {
    super(colour, row, col);
    this.#icon = (colour == "w") ? "♙" : "♟";

    if (colour == "w") {
      this.directions[0].row *= -1;
      this.directions[1].row *= -1;
    }
  }

  get icon() {
    return this.#icon;
  }

  get hasMoved() {
    return this.#hasMoved;
  }

  set hasMoved(bool) {
    this.#hasMoved = bool;
  }

}
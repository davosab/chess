class Pawn extends Piece {
  #icon;
  #hasMoved = false;

  directions = [
    {row: 1, col: 0}, 
    {row: 2, col: 0}, 
    null, 
    null
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

  checkForDiagonalTake() {
    let rowDirection = this.colour == "w" ? -1 : 1;
    this.directions.splice(-2, 1, {row: rowDirection, col: -1});
    this.directions.splice(-1, 1, {row: rowDirection, col: 1});
    
    // remove diagonal takes if enemy pieces not present
    if (
      !board[this.row + rowDirection][this.col - 1] || 
      board[this.row + rowDirection][this.col - 1].colour == this.colour
    ) {
      this.directions.splice(-2, 1, null);
    }
    if (!board[this.row + rowDirection][this.col + 1] || 
      board[this.row + rowDirection][this.col + 1].colour == this.colour
    ) {
      this.directions.splice(-1, 1, null);
    }
  }

}
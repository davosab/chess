class Piece {
  #colour;

  constructor(colour, row, col) {
    this.#colour = colour;
    this.row = row;
    this.col = col;
  }

  get colour() {
    return this.#colour;
  }

  moveNotOnBoard(i, j) {
    return i > 7 || i < 0 || j > 7 || j < 0;
  }

  getPossibleMoves() {
    let possibleMoves = [];

    directionsLoop:
    for (const d of this.directions) {
      let currentRow = this.row + d.row;
      let currentCol = this.col + d.col;

      let keepGoingInDirection = true;
      while (keepGoingInDirection) {

        let possibleMove = { row: currentRow, col: currentCol };

        if (this.moveNotOnBoard(currentRow, currentCol)) {
          continue directionsLoop;
        }

        // if comes across a piece
        if (board[currentRow][currentCol] != null) {
          if (board[currentRow][currentCol].colour != this.colour) {
            possibleMoves.push(possibleMove);
          }
          keepGoingInDirection = false;
        } else {
          possibleMoves.push(possibleMove);
        }
        // if pawn, knight or king don't go more steps in same direction
        if (
          this instanceof Pawn ||
          this instanceof King ||
          this instanceof Knight
        ) {
          continue directionsLoop;
        }

        currentRow += d.row;
        currentCol += d.col;
      }
    }

    return possibleMoves;
  }

}
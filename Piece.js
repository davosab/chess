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
    // let nr = 0;

    // add diagonal take if pawn
    if (this instanceof Pawn) this.checkForDiagonalTake();

    directionsLoop: for (let i = 0; i < this.directions.length; i++) {
      const d = this.directions[i];
      if (!d) {
        console.log(i + " direction: " + d);
      } else {
        console.log(i + " direction: " + d.row + ", " + d.col);
      }
      if (!d) continue;

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
            // dont let pawn frontal take or double move over a piece
            if (this instanceof Pawn && d.col == 0) {
              if (!this.hasMoved) i += 2;
              continue directionsLoop;
            }
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

    // console.log(possibleMoves);
    return possibleMoves;
  }

  moveTo(row, col) {
    let moveIsPossible = this.getPossibleMoves().some(
      move => move.row == row && move.col == col
    );

    if (moveIsPossible) {
      // swap "pieces"
      board[row][col] = this;
      board[this.row][this.col] = null;

      // assign new position
      this.row = row;
      this.col = col;

      // drop piece
      selectedPiece = null;
      //changes turn
      currentTurn = currentTurn == "w" ? "b" : "w";
      changeTurn();
      startTimer();
      // remove double move if pawn
      if (this instanceof Pawn && !this.hasMoved) {
        this.hasMoved = true;
        this.directions.splice(1, 1);
      }
    }


  }
}

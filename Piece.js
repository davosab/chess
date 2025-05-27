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

  clone() {
    return new this.constructor(this.colour, this.row, this.col);
  }

  getPossibleMoves(b, { ignoreOwnKingChecks } = {}) {
    let possibleMoves = [];

    // add diagonal take if pawn
    if (this instanceof Pawn) this.checkForDiagonalTake();

    directionsLoop: for (let i = 0; i < this.directions.length; i++) {
      const d = this.directions[i];
      if (!d) continue;

      let currentRow = this.row + d.row;
      let currentCol = this.col + d.col;

      let keepGoingInDirection = true;
      while (keepGoingInDirection) {
        let possibleMove = { row: currentRow, col: currentCol };
        let possibleMoveAdded = false;

        if (this.moveNotOnBoard(currentRow, currentCol)) {
          continue directionsLoop;
        }

        // if comes across a piece
        if (b[currentRow][currentCol] != null) {
          if (b[currentRow][currentCol].colour != this.colour) {
            // dont let pawn frontal take or double move over a piece
            if (this instanceof Pawn && d.col == 0) {
              if (!this.hasMoved) i += 2;
              continue directionsLoop;
            }
            possibleMoves.push(possibleMove);
            possibleMoveAdded = true;
          }
          keepGoingInDirection = false;
        } else {
          possibleMoves.push(possibleMove);
          possibleMoveAdded = true;
        }

        if (!ignoreOwnKingChecks) {
          let clonedBoard = b.map(row =>
            row.map(piece => piece ? piece.clone() : null)
          );

          let triedSquare = clonedBoard[currentRow][currentCol];
          clonedBoard[currentRow][currentCol] = this;
          clonedBoard[this.row][this.col] = null;

          // temporarily update piece position
          let originalRow = this.row;
          let originalCol = this.col;
          this.row = currentRow;
          this.col = currentCol;

          if (this.ownKingChecked(clonedBoard)) {

            // restore "this" original position
            this.row = originalRow;
            this.col = originalCol;

            clonedBoard[currentRow][currentCol] = triedSquare;
            clonedBoard[this.row][this.col] = this;
            if (possibleMoveAdded) possibleMoves.pop();
          }

          // restore "this" original position
          this.row = originalRow;
          this.col = originalCol;

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

    if (this instanceof King) console.log(possibleMoves);
    return possibleMoves;
  }

  moveTo(row, col) {
    let moveIsPossible = this.getPossibleMoves(board).some(
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
    console.log(this.icon + "'s player giving check: " + this.colourGivesCheck(board));
    console.log("Checked on own move: " + this.ownKingChecked(board));
  }

  ownKingChecked(b) {
    for (let row of b) {
      for (let piece of row) {
        if (piece && piece.colour != this.colour && piece.thisGivesCheck(b)) {
          return true;
        }
      }
    }
    return false;
  }

  colourGivesCheck(b) {
    for (let row of b) {
      for (let piece of row) {
        if (piece && piece.colour == this.colour && piece.thisGivesCheck(b)) {
          return true;
        }
      }
    }
    return false;
  }

  thisGivesCheck(b) {
    let kingRow, kingCol;
    for (let row of b) {
      for (let piece of row) {
        if (piece instanceof King && piece.colour != this.colour) {
          kingRow = piece.row;
          kingCol = piece.col;
        }
      }
    }
    return this.getPossibleMoves(b, { ignoreOwnKingChecks: true }).some(move =>
      move.row == kingRow && move.col == kingCol
    );
  }

}

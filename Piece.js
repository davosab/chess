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

  getPossibleMoves() {
    let possibleMoves = [];
    for (const move of this.moves) {
      let possibleMove = [this.row + move[0], this.col + move[1]];
      if (
        possibleMove[0] > 7 || possibleMove[0] < 0 || // row is on board
        possibleMove[1] > 7 || possibleMove[1] < 0 // col is on board   
      ) continue;

      // if piece on square is of same colour, skip
      if (
        board[possibleMove[0]][possibleMove[1]] != null &&
        board[possibleMove[0]][possibleMove[1]].colour == this.colour
      ) continue;

      possibleMoves.push([this.row + move[0], this.col + move[1]]);
    }
    return possibleMoves;
  }

  // colourSquares(arrayPossibleSquares) {
  //   for (let possibleMove of arrayPossibleSquares) {
  //     let row = possibleMove[0];
  //     let col = possibleMove[1];

  //     if (row >= 0 && row <= 7 && col >= 0 && col <= 7) {
  //       fill("#ffe8b5");
  //       rect(col * s, row * s, s, s);
  //     }
  //   }
  // }
}
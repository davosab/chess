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

  colourSquares(arrayPossibleSquares) {
    for (let possibleMove of arrayPossibleSquares) {
      let row = possibleMove[0];
      let col = possibleMove[1];

      if (row >= 0 && row <= 7 && col >= 0 && col <= 7) {
        fill("#ffe8b5");
        rect(col * s, row * s, s, s);
      }
    }
  }
}
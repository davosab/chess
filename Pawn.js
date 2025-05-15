class Pawn extends Piece {
  #icon;
  #hasMoved = false;

  moves = [ // changes to the index of the initial position
    [1, 0], 
    [2, 0]
  ];

  constructor(colour, row, col) {
    super(colour, row, col);
    this.#icon = (colour == "w") ? "♙" : "♟" ;
  }

  get icon() {
    return this.#icon;
  }

  showPossibleMoves() {
    if (!this.#hasMoved) moves.pop(); // remove option to move 2 squares
    let possibleMoves = [];
    for (const move of this.moves) {
      let possibleMove = [this.row + move[0], this.col + move[1]];
      if (
        possibleMove[0] > 7 || possibleMove[0] < 0 || // row is on board
        possibleMove[1] > 7 || possibleMove[1] < 0 // col is on board   
      ) continue;

      // if piece on square is of same colour, skip
      if (board[possibleMove[0], possibleMove[1]].colour == this.colour) 
        continue;

      possibleMoves.push([this.row + move[0], this.col + move[1]]);
    }
    this.colourSquares(possibleMoves);
  }
}
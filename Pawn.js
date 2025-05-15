class Pawn extends Piece {
  #icon;
  #hasMoved = false;

  moves = [ // changes to the index of the initial position
    [1, 0], // for pawns moving down the board
    [2, 0] // for pawns moving up, row must be -
  ];

  constructor(colour, row, col) {
    super(colour, row, col);
    this.#icon = (colour == "w") ? "♙" : "♟";

    if (colour == "w") {
      this.moves[0][0] *= -1;
      this.moves[1][0] *= -1;
    } 
  }

  get icon() {
    return this.#icon;
  }

  getPossibleMoves() {
    let possibleMoves = [];

    // if (!this.#hasMoved) this.moves.pop(); // remove option to move 2 squares
    
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
    console.log("possibleMoves in Pawn: " + possibleMoves);
    return possibleMoves;
  }
}
class Knight extends Piece {
  moves = [ // changes to the index of the initial position
    [-1, -2], 
    [-2, -1], 
    [-2, 1], 
    [-1, 2], 
    [1, 2], 
    [2, 1], 
    [2, -1], 
    [1, -2]
  ];
  constructor(colour, row, col) {
    super(row, col);
    this.colour = colour;
    this.icon = (colour == "white") ? "♘" : "♞" ;
  }

  getIcon() {
    return this.icon;
  }

  getPossibleMoves() {
    let possibleMoves = [];
    for (const move of moves) {
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
    return possibleMoves;
  }
}
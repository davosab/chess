class Bishop extends Piece {
  directions = [
    {row: -1, col: 1},
    {row: -1, col: -1},  
    {row: 1, col: -1},
    {row: 1, col: 1},
  ]
  constructor(colour, row, col) {
    super(colour, row, col);
    this.icon = colour === "w" ? "♗" : "♝";
  }

  getIcon() {
    return this.icon;
  }
}

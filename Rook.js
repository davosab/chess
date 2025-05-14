class Rook extends Piece {
    constructor(colour) {
        super();
        this.colour = colour;
        this.icon = (colour === "white") ? "♖" : "♜" ;
    }

    getIcon() {
       return this.icon;
    };

    getPossibleMoves(row, col, board) {
    let rookPossibleMoves = [];

        // Possible Moves to right
        for (let c = col + 1; c < 8; c++) {
      if (board[row][c] === null) rookPossibleMoves.push({ row, col: c });
      else break;
    }

    // Possible Moves to Left
    for (let c = col - 1; c >= 0; c--) {
      if (board[row][c] === null) rookPossibleMoves.push({ row, col: c });
      else break;
    }

    // Possible Moves Up
     for (let r = row - 1; r >= 0; r--) {
      if (board[r][col] === null) rookPossibleMoves.push({ row: r, col });
      else break;
    }

    // Possible Moves Down
    for (let r = row + 1; r < 8; r++) {
      if (board[r][col] === null) rookPossibleMoves.push({ row: r, col });
      else break;
    }
        return rookPossibleMoves;
    }


  }

   Rook.colourSquares(rookPossibleMoves);
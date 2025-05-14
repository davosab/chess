class Rook extends Piece {
    constructor(colour) {
        super();
        this.colour = colour;
        this.icon = (colour === "white") ? "♖" : "♜" ;
    }

    getIcon() {
       return this.icon;
    };
  }
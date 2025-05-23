class King extends Piece {
  #icon;

  directions = [ // changes to the index of the initial position
    {row: -1, col: 0}, 
    {row: -1, col: 1}, 
    {row: 0, col: 1}, 
    {row: 1, col: 1}, 
    {row: 1, col: 0}, 
    {row: 1, col: -1}, 
    {row: 0, col: -1}, 
    {row: -1, col: -1}
  ];

  constructor(colour, row, col) {
    super(colour, row, col);
    this.#icon = (colour == "w") ? "♔" : "♚" ;
  }

  get icon() {
    return this.#icon;
  }

}
class Piece {
    colourSquares(arrayPossibleSquares){
        for(let possibleMoves of arrayPossibleSquares) {
            let row = possibleMoves.row;
            let col = possibleMoves.col;

            if(row >= 0 && row <= 7 && col >= 0 && col <= 7){
                fill("#fbd275");
                rect(col * s, row * s, s, s); 
            }
        }
    }   

}
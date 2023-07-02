import React from "react";
import Square from "./Square";


function Board({board, onClick}) {
    const gridSize = Math.sqrt(board.length);
    return ( 
    <div className="board-row" style={{display: 'grid', gridTemplateColumns: `repeat(${gridSize},6rem)`}}>
      {
        board.map((value, SquareId) => {
            return <Square value={value} onClick={() => value === null ? onClick(SquareId) : null} />;
        })
        
      }
    </div>
    )
}

export default Board;
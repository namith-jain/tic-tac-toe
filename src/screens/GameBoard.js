import '../App.css';
import Board from '../components/Board';
import ScoreBoard from '../components/ScoreBoard';
import ResetButton from '../components/ResetButton';
import NavBar from '../components/NavBar';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function GameBoard() {

    const location = useLocation();


    const gridSize = location.state.gridSize;


    const [board, setBoard] = useState(Array(gridSize).fill(null));
    const [xPlay, setXPlay] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    const [scores, setScores] = useState({ xScore: 0, oScore: 0 })

    // const winConditions = [
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 3, 6],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [0, 4, 8],
    //     [2, 4, 6]
    // ]

    const checkWinner = (board, gridSize) => {
        const a = getGridColumns(board, Math.sqrt(gridSize));
        const b = getGridRows(board, Math.sqrt(gridSize));
        const c = getGridDiagonal(board, Math.sqrt(gridSize));
        const d = getGridAntiDiagonal(board, Math.sqrt(gridSize));

        if (a){ 
            setGameOver(true);
            return a;
        }
        if (b){
            setGameOver(true);
            return b;
        }
        if (c){
            setGameOver(true);
            return c;
        }
        if (d){
            setGameOver(true);
            return d;
        }

    }

    const allSameElements = (board, arr) => {
        for (let i=1; i<arr.length; i++){
            if (board[arr[i]] !== board[arr[0]]){
                return false;
            }
        }
        return board[arr[0]];
    }

    // // column check
    const getGridColumns = (board, n) => {

        var cols = [];
        for (var i = 0; i < n; i++) {

            var column = [];

            for (var j = 0; j < n; j++) {
                column.push(i + j * n);
            }

            cols.push(column);
            
        }
        for (let i = 0; i<cols.length; i++){

            const col = cols[i];

            var result = allSameElements(board,col);
            if (result){
                return result;
            }
            
        }
        return null ;
    }


    // row check

    const getGridRows = (board, n) => {

        var rows = [];

        for (var i = 0; i < n; i++) {

            var row = [];

            for (var j = 0; j < n; j++) {
                row.push(i * n + j);
            }


            rows.push(row);
        }

        for (let i = 0; i<rows.length; i++){

            const row = rows[i];

            var result = allSameElements(board, row);
            if (result){
                return result;
            }

            
        }

    }

    const getGridDiagonal = (board, n) => {
        var diagonal = [];

        for (var i = 0; i < n; i++) {
            diagonal.push(i * (n + 1));
        }

        var result = allSameElements(board, diagonal);
        if (result){
            return result;
        }

    }

    const getGridAntiDiagonal = (board, n) => {

        var antiDiagonal = [];

        for (var i = 0; i < n; i++) {
            antiDiagonal.push((i + 1) * (n - 1));
        }

        var result = allSameElements(board, antiDiagonal);
        if (result){
            return result;
        }

    }

    

    const handleClick = (squareId) => {
        const updateBoard = board.map((value, idx) => {
            if (idx === squareId) {
                return xPlay === true ? "X" : "O";
            } else {
                return value;
            }
        })

        const winner = checkWinner(updateBoard, gridSize);

        if (winner) {
            if (winner === "O") {
                let { oScore } = scores;
                oScore += 1;
                setScores({ ...scores, oScore })
            } else {
                let { xScore } = scores;
                xScore += 1;
                setScores({ ...scores, xScore })
            }
        }

        setBoard(updateBoard);
        setXPlay(!xPlay);
    }

    



    const resetGame = () => {
        setXPlay(true);
        setGameOver(false);
        setBoard(Array(gridSize).fill(null));
    }

    return (
        <>
            <NavBar />
            <ScoreBoard scores={scores} />
            {
                <div className="App">
                    <Board board={board} onClick={gameOver ? resetGame : handleClick} />
                </div>
            }

            <div className='scoreBoard heading'>
                <ResetButton resetGame={resetGame} />
            </div>

        </>
    );
}

export default GameBoard;




















//############################################################
// function GameBoard() {

//     const [value, setValue] = useState('X');
//     const [n, setn] = useState(3);
//     const [board, setBoard] = useState([]);


//     // const handleN = (e) => {
//     //     if(e.target.value==="") return;
//     //     const num = Number(e.target.value);
//     //     setn(e.target.value);
//     //     const newBoard = [];
//     //     for(let i=0;i<num;i++) {
//     //         newBoard.push(<Row val={num} type={value}/>);
//     //     }
//     //     setBoard(board => [...newBoard]);
//     // }




//     return (
//         <div>
//         <Square value="X" onClick={null} />
//         </div>
//     );
// }





// //     const [n, setn] = useState(3);
// //     const [print, setPrint] = useState(true);
// //     //const [matrix, setMatrix] = useState([]);

// //     const rows = [];
// //     for (let i = 0; i < n; i++) {
// //        rows.push(<Row key = {i} n = {n}/>);
// //     }
// //         //setMatrix(matrix => [...rows]);

// //     const handleN = (e) => {
// //         setPrint(false);
// //         setn(Number(e.target.value));
// //     }

// //     // function printMatrix () {
// //     //     handleN()
// //     // }

// //     return (
// //         <>
// //             <div className="board">
// //                 {
// //                     print?
// //                     <div>{rows}</div>
// //                     :null
// //                 }
// //             </div>
// //             <input className = "input field" type="text" onClick={handleN}></input>
// //             <button className="input button go" onClick={() => setPrint(true)}>Go</button>
// //         </>

// //     );
// // }


// export default GameBoard;

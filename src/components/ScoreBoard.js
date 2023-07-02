function ScoreBoard ({scores}){
    const {xScore, oScore} = scores;
    return ( 
        
        <div className='scoreBoard heading text'>
            <span className="score x"> X - {xScore}</span>
            <span className="score o"> O - {oScore}</span>
        </div>
     );
}

export default ScoreBoard;
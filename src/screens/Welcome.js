import NavBar from "../components/NavBar";
import InputField from "../components/InputField";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function WelcomePage() {

    const [gridSize, setGrid] = useState(9);
    const navigate = useNavigate()
    
    const handleN = (e) => {
        let num = Math.pow(Number(e.target.value),2);
        setGrid(num);
    }

    function goToGame() {
        navigate("/game", {state: {gridSize : gridSize}})
    }

    return ( 
        <div>
            <NavBar />
            <div className="container">
                <h1 className="heading-welcome">Welcome</h1>
                <h3 className="sub-heading">Type the grid Size to play</h3>
            </div>
            <InputField handleN={handleN} goToGame={goToGame}/>
            </div>
        
     );
}

export default WelcomePage;
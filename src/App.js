import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomePage from './screens/Welcome';
import GameBoard from './screens/GameBoard';


function App() {

  return (
    <BrowserRouter>
    <div>
    <Routes>
    <Route path="/" element={<WelcomePage />} exact/>
    <Route path="/game" element={<GameBoard/>} />  
    </Routes>
    </div>
    </BrowserRouter>

);
}

export default App;



import React from "react";


function Square({value, onClick}) {

    // const Box = ({ value, onClick }) => {
    //     const style = value === "X" ? "box x" : "box o";
    // }
    return (
        <button className="button square" onClick={onClick}>{value}</button>
    );
  }

  export default Square;
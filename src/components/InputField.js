
function InputField({handleN, goToGame}) {
    return ( 
        <div className="input">
            <input type="text" className="field sub-heading" placeholder="Enter odd number" onChange={handleN}></input>
            <button className="button go" onClick={goToGame}>Go</button>
        </div>
     );
}

export default InputField;
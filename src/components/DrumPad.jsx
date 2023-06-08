const DrumPad = ({ audioName, buttonName, aSrc, Click}) => 
    <button 
        className="drum-pad" 
        id={ audioName }
        onClick= { Click } 
        >
        <audio src={ aSrc } className="clip" id={ buttonName } defer></audio>
        { buttonName }
    </button>

export default DrumPad;
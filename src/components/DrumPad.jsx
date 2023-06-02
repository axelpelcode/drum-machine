const DrumPad = ({audioName, buttonName, audioSrc}) => 
    <button className="drum-pad" id={audioName}>
        <audio src={audioSrc} className="clip" id={buttonName} />
        {buttonName}
    </button>

export default DrumPad;
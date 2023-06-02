import './App.css';
import Display from './components/Display';
import DrumPad from './components/DrumPad';

function App() {
  return (
    <div className="App">
      <div id="drum-machine" >
        <Display  />
        <DrumPad 
          buttonName="Q" 
          audioName="Heater 1" 
          audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        />
        <DrumPad 
          buttonName="W" 
          audioName="Heater 2" 
          audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        />
        <DrumPad 
          buttonName="E" 
          audioName="Heater 3" 
          audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        />
        <DrumPad 
          buttonName="A" 
          audioName="Heater 4" 
          audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        />
        <DrumPad 
          buttonName="S" 
          audioName="Clap" 
          audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        />
        <DrumPad 
          buttonName="D" 
          audioName="Open-HH" 
          audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        />
        <DrumPad 
          buttonName="Z" 
          audioName="Kick-n'-Hat" 
          audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        />
        <DrumPad 
          buttonName="X" 
          audioName="Kick" 
          audioSrc="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        />
        <DrumPad 
          buttonName="C" 
          audioName="Closed-HH" 
          audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        />
      </div>
    </div>
  );
}

export default App;

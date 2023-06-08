import './App.css';
import Display from './components/Display';
import DrumPad from './components/DrumPad';
import drumObjs from './drumObj';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  
  const [ content, setContent ] = useState( "display" );

  useEffect(() => 
    document.addEventListener('keydown', (event) => {
      const keyDisp = drumObjs
      .filter(
        (name)=>name.buttonName === event.key.toUpperCase()
      )
      .map((name)=>name.audioName)
      playAudio( event.key.toUpperCase(), ...keyDisp )
      console.log(keyDisp)
    })
  ,[]);

  function playAudio( selectA, selectB ) {
    const audio = document.getElementById( selectA );
    setContent( selectB );
    audio.play();
  };

  return (
    <div className="App" >
      <h1 className="title">Drum Machine</h1>
      <div id="drum-machine" >
        <Display 
          displayed= { content } 
        />
        { drumObjs.map(( drum ) => 
        <DrumPad 
          key={ drum.audioName }
          buttonName={ drum.buttonName } 
          audioName={ drum.audioName } 
          aSrc={ drum.audioSrc }
          Click= { () => { playAudio( drum.buttonName, drum.audioName )} }
        />
        )}
      </div>
    </div>
  );
}

export default App;

import w from './images/crash.png';
import a from './images/kick.png'
import s from './images/snare.png'
import d from "./images/tom1.png"
import j from "./images/tom2.png"
import k from "./images/tom3.png"
import l from "./images/tom4.png"

import ws from './sounds/crash.mp3'
import as from './sounds/kick-bass.mp3'
import ss from './sounds/snare.mp3'
import ds from "./sounds/tom-1.mp3"
import js from "./sounds/tom-2.mp3"
import ks from "./sounds/tom-3.mp3"
import ls from "./sounds/tom-4.mp3"


import './App.css';


function App() {


  let audio1 = new Audio(`${ws}`)
  let audio2 = new Audio(`${as}`)
  let audio3 = new Audio(`${ss}`)
  let audio4 = new Audio(`${ds}`)
  let audio5 = new Audio(`${js}`)
  let audio6 = new Audio(`${ks}`)
  let audio7 = new Audio(`${ls}`)

  

  const start1 = () => {
    audio1.play()
    
  }

  const start2 = () => {
    audio2.play()
  }

  const start3 = () => {
    audio3.play()  
  }

  const start4 = () => {
    audio4.play()  
  }

  const start5 = () => {
    audio5.play()  
  }

  const start6 = () => {
    audio6.play()  
  }

  const start7 = () => {
    audio7.play()  
  }

  const onGetKeySound=(event)=>{
    if(event.key === "w"){
      start1()
    }
    if(event.key === "a"){
      start2()
    }
    if(event.key === "s"){
      start3()
    }
    if(event.key === "d"){
      start4()
    }
    if(event.key === "j"){
      start5()
    }
    if(event.key === "k"){
      start6()
    }
    if(event.key === "l"){
      start7()
    }
    
  }
  
 

  return (
    <div className="app-container">
      <div className="container">
        <h1 className="heading">Drum 🥁 Kit</h1>

        <div className="instruments-container">
          <button  type = "button" className="instrument-card" onClick={start1} onKeyDown={onGetKeySound}>
            <div className="image-container" style={{ backgroundImage: `url(${w})` }}>
            <h1 className="word-text">w</h1>
            </div>
          </button>
          <button type="button" className="instrument-card" onClick={start2} onKeyDown={onGetKeySound}>
            <div className="image-container" style={{ backgroundImage: `url(${a})` }}>
            <h1 className="word-text">a</h1>
            </div>
          </button>
          <button type = "button" className="instrument-card" onClick={start3} onKeyDown={onGetKeySound}>
            <div className="image-container" style={{ backgroundImage: `url(${s})` }}>
            <h1 className="word-text">s</h1>
            </div>
          </button>
          <button className="instrument-card" type = "button" onClick={start4} onKeyDown={onGetKeySound}>
            <div className="image-container" style={{ backgroundImage: `url(${d})` }}>
            <h1 className="word-text">d</h1>
            </div>
          </button>
          <button className="instrument-card" type = "button" onClick={start5} onKeyDown={onGetKeySound}>
            <div className="image-container" style={{ backgroundImage: `url(${j})` }}>
            <h1 className="word-text">j</h1>
            </div>
          </button>
          <button className="instrument-card" type = "button" onClick={start6} onKeyDown={onGetKeySound}>
            <div className="image-container" style={{ backgroundImage: `url(${k})` }}>
            <h1 className="word-text">k</h1>
            </div>
          </button>
          <button className="instrument-card" type = "button" onClick={start7} onKeyDown={onGetKeySound}>
            <div className="image-container" style={{ backgroundImage: `url(${l})` }}>
            <h1 className="word-text">l</h1>
            </div>
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default App;

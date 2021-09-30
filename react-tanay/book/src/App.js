import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [music, setmusic] = useState(false)
  const [food,setfood] = useState(false)
  const [travel, settravel] = useState(false)
  const [tedx, settedx] = useState(false)
  console.log(music)
  const changemusic = () =>{
 
    setmusic(true)
    setfood(false)
    settravel(false)
    settedx(false)
  }
  const changefood = () =>{
    console.log("food",food)
    setmusic(false)
    setfood(true)
    settravel(false)
    settedx(false)
  }
  const changeTravel = () =>{
 
    setmusic(false)
    setfood(false)
    settravel(true)
    settedx(false)
  }

  const TedXTalks = () =>{
    setmusic(false)
    setfood(false)
    settravel(false)
    settedx(true)
  }
  return (
    <div className="App" >
      <h1>Goodbooks</h1>
      <small>checkout my favourite books.Select a genre to get started</small><br/>
      <div style={{padding:"10px 20px"}}>
        <button onClick={()=>{changemusic()}}>Music</button>
        <button onClick={()=>{changefood()}}>Food</button>
        <button onClick={()=>{changeTravel()}}>Travel</button>
        <button onClick={()=>{TedXTalks()}}>TedX Talks</button>
        {/* <button onCLick={()=>{changeTravel()}}>Travel</button> */}
        </div>
      <hr />
      <div className={music?"musicshow":"musichide"}>
        <p>Lets'Go🎵<br/><small>3/5</small></p>
        <p>Book of world famous🎵<br/><small>3/5</small></p>
        <p>Divided soul🎵<br/><small>3/5</small></p>
      </div>
      <div className={food?"foodshow":"foodhide"}>
        <p>On food and cook<br/><small>3/5</small></p>
        <p>Falastin<br/><small>3/5</small></p>
        <p>The mexican ridde<br/><small>3/5</small></p>
      </div>

      <div className={travel?"travelshow":"travelhide"}>
        <p>On the Road<br/><small>3/5</small></p>
        <p>Down Under<br/><small>3/5</small></p>
        <p>In patagonia<br/><small>4/5</small></p>
      </div>

      <div className={tedx?"tedxtalkshow":"tedxtalkhide"}>
        <p>The art of stillness<br/><small>3/5</small></p>
        <p>Judge This<br/><small>3/5</small></p>
        <p>Floow your guts<br/><small>3/5</small></p>
      </div>

    </div>
  );
}

export default App;

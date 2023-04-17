import React from 'react'
import{useState} from 'react'
import "./PlayButton.css"
export default function PlayButton({onPlay,onPause,children}) {
  const[playing,setPlaying]=useState(false);
  const handleClick=()=>{
    if(playing) onPause();
    else onPlay();
    setPlaying(!playing)
  }
  return (
    <button onClick={handleClick}>{children}:{playing ? '▶️':'⏸️'}</button>
  )
}

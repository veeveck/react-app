import React,{useContext} from 'react'
import Video from './Video';
import VideosContext from '../context/VideosContext';
import axios from 'axios';

function VideoList({dispatch,editVideo}) {
  const videos=useContext(VideosContext);
  const url ="https://my.api.mockaroo.com/movie.json?key=8d64d850";
  const clickHandler=()=>{
    const res= axios.get(url);
    console.log(res);
  }
  return (
   <>
    {videos.map((video)=>
    <Video 
    key={video.id}
    id={video.id}
    title={video.title}
    channel={video.channel}
    views={video.views}
    time={video.time}
    verified={video.verified}
    editVideo={editVideo}
    
    />)}
    <button onClick={clickHandler}>Get Video</button>
   </>
  )
}
export default VideoList;

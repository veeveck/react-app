import React,{useContext} from 'react'
import Video from './Video';
import VideosContext from '../context/VideosContext';


function VideoList({dispatch,editVideo}) {
  const videos=useContext(VideosContext);
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
   </>
  )
}
export default VideoList;

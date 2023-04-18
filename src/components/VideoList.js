import React from 'react'
import Video from './Video';


function VideoList({videos,deleteVideo,editVideo}) {
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
    deleteVideo={deleteVideo}  
    editVideo={editVideo}
    />)}
   </>
  )
}
export default VideoList;

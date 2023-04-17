import React from 'react'
import Video from './Video';
import videos from '../data/data';

function VideoList({videos}) {
  return (
   <>
    {videos.map((video)=><Video key={video.id} id={video.id}title={video.title} channel={video.channel} views={video.views} time={video.time} verified={video.verified}/>)}
   </>
  )
}
export default VideoList;

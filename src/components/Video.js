import PlayButton from "./PlayButton";
import "./Video.css"
function Video({id,title,channel,views,time,verified,deleteVideo,editVideo}) {
  return (
    <>
    <div className="container">
    <button className="close" onClick={()=>deleteVideo(id)}>X</button>
    <button className="edit" onClick={()=>editVideo(id)}>Edit</button>
    <div className="pic">
      <img src={`https://picsum.photos/id/${id}/160/90`} alt="photoNotAvailable" />
    </div>
    <div className="title">{title}</div>
    <div className="channel">{channel} {verified && '✅'}</div>
    <div className="views">{views} views <span>.</span>{time}</div>
    <div><PlayButton onPlay={()=>console.log("Play "+title)} onPause={()=>console.log("Pause "+title)}>{title}</PlayButton></div>
    </div>
    </>
  );
}
export default Video;

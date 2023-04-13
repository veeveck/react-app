import "./Video.css"
function Video({id,title,channel,views,time,verified}) {
  return (
    <div className="container">
    <div>
      <img src={`https://picsum.photos/id/${id}/160/90`} alt="photoNotAvailable" />
    </div>
    <div className="title">{title}</div>
    <div className="channel">{channel} {verified && '✅'}</div>
    <div className="views">{views} views <span>.</span>{time}</div>
    </div>
  );
}
export default Video;

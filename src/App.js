import './App.css';
import Video from './components/Video';
import videos from './data/data';

function App() {
  return (
    <div className="App">
      <h1>Videos</h1>
       {videos.map((video)=><Video key={video.id} id={video.id}title={video.title} channel={video.channel} views={video.views} time={video.time} verified={video.verified}/>)}
    </div>
  );
}

export default App;

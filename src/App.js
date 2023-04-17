import './App.css';
import AddVideo from './components/AddVideo';
import Counter from './components/Counter';
import VideoList from './components/VideoList';
import videoDB from './data/data';
import {useState} from 'react'

function App() {
  const[videos,setVideos]=useState(videoDB);

  function addVideos(video){
    setVideos([
      ...videos,
      {...video,id:videos.length+1}
    ]);
  }
  return (
    <div className="App">
      <h1>Videos</h1>
       <VideoList videos={videos}/>
       <AddVideo addVideo={addVideos}/>
       <Counter/>
    </div>
  );
}

export default App;

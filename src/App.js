import './App.css';
import AddVideo from './components/AddVideo';
import Counter from './components/Counter';
import VideoList from './components/VideoList';
import videoDB from './data/data';
import {useState} from 'react'

function App() {
  const[videos,setVideos]=useState(videoDB);
  const[editableVideo,setEditableVideo]=useState(null);
  function addVideos(video){
    setVideos([
      ...videos,
      {...video,id:videos.length+1}
    ]);
  }
  function updateVideo(video){
    const index=videos.findIndex(v=>v.id===video.id);
    const newVideos=[...videos];
    newVideos.splice(index,1,video);
    setVideos(newVideos);
  }
  function deleteVideo(id){
   setVideos(videos.filter(video=>video.id!==id))
  }
  function editVideo(id){
    setEditableVideo(videos.find(video=>video.id===id))
  }
  return (
    <div className="App">
      <h1>Videos</h1>
       <VideoList videos={videos} editVideo={editVideo} deleteVideo={deleteVideo} />
       <AddVideo addVideo={addVideos} editableVideo={editableVideo} updateVideo={updateVideo}/>
       <Counter/>
    </div>
  );
}

export default App;

import './App.css';
import AddVideo from './components/AddVideo';
import Counter from './components/Counter';
import VideoList from './components/VideoList';
import ThemeContext from './context/ThemeContext';
import VideosContext from './context/VideosContext';
import VideosDispatchContext from './context/VideosDispatchContext';
import videoDB from './data/data';
import {useState,useReducer,useContext} from 'react'

function App() {
  const[editableVideo,setEditableVideo]=useState(null);
  function videoReducer(videos,action){
    switch(action.type){
      case 'ADD':
        console.log([...videos,
          {...action.payload,id:videos.length+1}]);
        return[
          ...videos,
          {...action.payload,id:videos.length+1}
        ]
      case 'DELETE':
          return videos.filter(video=>video.id!==action.payload)
      case 'UPDATE':
        const index=videos.findIndex(v=>v.id===action.payload.id);
        const newVideos=[...videos];
        newVideos.splice(index,1,action.payload);
        setEditableVideo(null);
        return newVideos
         
      default:
        return videos  
    }
  }
  const themeContext=useContext(ThemeContext);
  const [videos,dispatch]=useReducer(videoReducer,videoDB);
 
  function deleteVideo(id){
    dispatch({type:'DELETE',payload:id});
  }
  function editVideo(id){
    setEditableVideo(videos.find(video=>video.id===id))
  }
  return (
    <VideosContext.Provider value={videos}>
    <VideosDispatchContext.Provider value={dispatch}>
    <div className={`App ${themeContext}`}>
      <h1>Videos</h1>
       <VideoList  editVideo={editVideo} deleteVideo={deleteVideo} />
       <AddVideo  editableVideo={editableVideo}/>
       <Counter/>
    </div>
    </VideosDispatchContext.Provider>
    </VideosContext.Provider> 
   
  );
}

export default App;

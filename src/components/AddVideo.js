import React,{useState,useEffect,useContext} from 'react'
import './AddVideo.css'
import VideosDispatchContext from '../context/VideosDispatchContext';
const AddVideo=({updateVideo,editableVideo})=> {
  
  const initialState={
    time:'1 month ago',
    channel:"Vivi",
    verified:true,
    title:'',
    views:''
  }  
  const[video,setVideo]=useState(initialState);
  const dispatch=useContext(VideosDispatchContext);
  const addVideoHandler=(e)=>{
     e.preventDefault();
    
     if(editableVideo){
      dispatch({type:'UPDATE',payload:video})
     }
     else{
      dispatch({type:'ADD',payload:video})
     }
    setVideo(initialState);
  }  
  const handleChange=(e)=>{
       setVideo({
        ...video,
        [e.target.name]:e.target.value
       })
  }
  useEffect(()=>{
    if(editableVideo){
      setVideo(editableVideo);
    }
    },[editableVideo])
  
  return (
    <form>
        <input name="title" type="text" value={video.title} placeholder="title" onChange={handleChange}/>
        <input name="views" type="text" value={video.views} placeholder="views" onChange={handleChange}/>
        <button onClick={addVideoHandler}>{editableVideo ? 'Edit' :'Add'} Video</button>
    </form>
  )
}

export default AddVideo

import React,{useState,useEffect} from 'react'
import './AddVideo.css'
const AddVideo=({addVideo,updateVideo,editableVideo})=> {
  
  const initialState={
    time:'1 month ago',
    channel:"Vivi",
    verified:true,
    title:'',
    views:''
  }  
  const[video,setVideo]=useState(initialState);
  const [editable,setEditable]=useState({title:'',views:'',id:''});  
  const addVideoHandler=(e)=>{
     e.preventDefault();
     if(editableVideo){
      updateVideo(video);
     }
     else{
      addVideo(video);
     }
     
     setVideo(initialState);
  }  
  const handleChange=(e)=>{
       setVideo({
        ...video,
        [e.target.name]:e.target.value
       })
  }
  if(editable.id!==editableVideo.id){
    setVideo(editableVideo);
    setEditable(editableVideo)
  }
  
  return (
    <form>
        <input name="title" type="text" value={video.title} placeholder="title" onChange={handleChange}/>
        <input name="views" type="text" value={video.views} placeholder="views" onChange={handleChange}/>
        <button onClick={addVideoHandler}>{editableVideo.id ? 'Edit' :'Add'} Video</button>
    </form>
  )
}

export default AddVideo

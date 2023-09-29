import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard'
import { YOUTUBE_VIDEOS_API } from '../utils/contants';

const VideoContainer = () => {
  const [videos,setvideos]=useState([])
  useEffect(()=>{
     getvideos();
  },[])
  const getvideos=async()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API);
    const json=await data.json();
    
    setvideos(json.items)
  }
  return (
    <div className=' flex flex-wrap ' >
      {videos.map((video)=>(
      <Link  to={"/watch?v="+video.id} key={video.id} className='w-1/4  p-2'><VideoCard   info={video}/></Link>
      ))
     }   
    </div>
  )
}

export default VideoContainer
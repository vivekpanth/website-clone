import React from 'react'

const VideoCard =  ({info}) => {
  console.log(info);
  const {snippet,statistics}=info||{};
  const{channelTitle,title,thumbnails}=snippet||{};
  return (
    <div className='p-2 mx-2 my-2 w-full font-normal text-sm shadow-lg ' >
      <img className='rounded-lg' alt="video" src={thumbnails?.medium?.url}  />
      <ul >
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard
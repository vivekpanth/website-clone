import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);

  return !isMenuOpen?null:(
    <div className='mt-6 mx-2 flex flex-col shadow-lg font-normal text-sm ' >
       <span className='hover:bg-gray-200 rounded-full text-lg m-2 px-2'> <Link to ="/">Home</Link></span>
        <span className='hover:bg-gray-200 rounded-full  text-lg m-2 px-2'>Shorts</span>
        <span className='hover:bg-gray-200 rounded-full  text-lg m-2 px-2'>Subscriptions</span>
        <span className='hover:bg-gray-200 rounded-full  text-lg m-2 px-2'>Library</span>
        <span className='hover:bg-gray-200 rounded-full  text-lg m-2 px-2'>History</span>
        <h4 className='mt-4 px-2 font-bold text-base'>Explore</h4>
        <span className='hover:bg-gray-200 rounded-full  text-lg m-2 px-2'>Trending</span>
        <span className='hover:bg-gray-200 rounded-full  text-lg m-2 px-2'>Music</span>
        <span className='hover:bg-gray-200 rounded-full  text-lg m-2 px-2'>Shopping</span>
        <span className='hover:bg-gray-200 rounded-full  text-lg m-2 px-2'>Live</span>
        <h4 className='mt-4 px-2 font-bold text-base'>More from Youtube</h4>
        <span className='hover:bg-gray-200 rounded-full  text-lg m-2 px-2'>Youtube Premium </span>
        <span className='hover:bg-gray-200 rounded-full  text-lg m-2 px-2'>Youtube Music </span>
        <span className='hover:bg-gray-200 rounded-full  text-lg m-2 px-2'>Youtube Kids </span>
        <span className='hover:bg-gray-200 rounded-full  text-lg m-2 px-2'>Settings </span>
        <span className='hover:bg-gray-200 rounded-full  text-lg m-2 px-2'>Help</span>
    </div>
  )
}

export default Sidebar
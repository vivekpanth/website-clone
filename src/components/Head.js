import { BiSearchAlt2 } from "react-icons/bi"; 
import React from 'react';
import {  useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

  const dispatch=useDispatch();
  const handlesidebartoggle=()=>{
      dispatch(toggleMenu())
  }
  
  return (
    <div className='grid grid-flow-col shadow-md font-sans text-lg'>
      <div className='h-16 p-2  col-span-3 flex '>
        <img  onClick={()=>handlesidebartoggle()} className=' h-full p-2 cursor-pointer hover:bg-gray-200 ' src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="menu logo" />
        <a href="/"><img className=' h-full  cursor-pointer   md:hidden' src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-youtube-social-media-round-icon-png-image_8704829.png" alt="menu logo" /></a>
        <a href="/"><img className='h-full  p-2 cursor-pointer hidden md:block ' src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png" alt="Youtube logo" /></a>
      </div> 
      <div className="col-span-6 p-1 flex items-center justify-center m-1">
      <input type="text " className="w-1/4 h-3/4 text-base p-2 md:w-full px-4 border border-gray-400 rounded-l-full" placeholder=" Search" ></input>
      <span className=" rounded-r-full border-2 border-gray-400 h-3/4 p-2 items-center hover:bg-gray-200"><BiSearchAlt2 /></span>
      </div>
      <div className='h-16 py-2 px-2  md:px-10 col-span-3 flex items-center justify-end ' >
        <img className=' h-full py-2 px-4 cursor-pointer ' src="https://static.thenounproject.com/png/2854151-200.png" alt="logo" />
        <div className=" h-12 hover:border-2 hover:bg-gray-200 flex items-center rounded-3xl  p-1  border-gray-400 ">
        <img className='h-full  px-2' src="https://w7.pngwing.com/pngs/339/876/png-transparent-login-computer-icons-password-login-black-symbol-subscription-business-model-thumbnail.png" alt="User" />
        <p className=' text-center px-2'>Sign in</p>
        </div>
      </div> 
        </div>
  )
}

export default Head
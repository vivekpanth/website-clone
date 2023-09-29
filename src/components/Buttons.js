import React from 'react'

const Buttons = ({items}) => {
  const buttonelements=items.map((item,index)=>(
     <button className='bg-gray-200 rounded-lg border-2 text-sm m-2 px-2 hover:bg-black hover:text-white' key={index}>{item}</button>
  ));
 
      
  return (
      <div className="flex mx-5 my-2" >{buttonelements}</div>
  )
}

export default Buttons;
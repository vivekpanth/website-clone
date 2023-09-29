import React from 'react'
import Buttons from './Buttons';
const ButtonList = () => {
    const blist=["All","Music","Live","Gaming","Arjit Singh","T-series","Comedy","Cricket","Lo-fi","Mantras","news","gadgets","fashion","dance"]
    

  return (
    <div>
    <Buttons items= {blist}/>
    </div>
  )
}

export default ButtonList;
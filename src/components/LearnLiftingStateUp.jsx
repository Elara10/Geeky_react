import React from 'react'

const LearnLiftingStateUp = (props) => {
    const handleClick=(e)=>{
        e.preventDefault()
         let dt="I am child data"   
         props.myClick(dt) 
    }
  return (
    <>
      <button onClick={handleClick}>Click 1</button>
    </>
  )
}

export default LearnLiftingStateUp

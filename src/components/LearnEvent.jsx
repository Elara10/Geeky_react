import React from 'react'

const LearnEvent = () => {
    const handleClick1=(e)=>{
      e.preventDefault()
      console.log("Button Clicked 1");
    }
    const handleClick2=(myid)=>{
        // e.preventDefault()
        console.log("Button Clicked 2",myid);
      }
  return (
    <>
    {/* Without argument */}
    <button onClick={handleClick1}>Click 1</button>
     {/* With argument */}
     <button onClick={(e)=>handleClick2("MyID")}>Click 2</button>
    </>
  )
}

export default LearnEvent

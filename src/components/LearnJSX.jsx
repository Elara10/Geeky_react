import React from 'react'

const LearnJSX = () => {
    let model="G11234"
  return (
   <>
   {/* React.createElement("h1","null","LearnJSX 1") */}
   <h1>LearnJSX 1</h1>

      {/* React.createElement("h1","null","LearnJSX 2") */}
      <h1>LearnJSX 2</h1>

    {/* JavaScript Expression in JSX */}
    <h1>Price:{10+30}</h1>
    <h1>LG {model}</h1>

    {/*Attribute in JSX */}
    <h1 className="bg-primary">Learn JSX 3</h1>
    <h1 className={model}>Learn JSX 4</h1>
   </>
  )
}

export default LearnJSX

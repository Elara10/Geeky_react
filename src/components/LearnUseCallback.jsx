import {useState,useCallback} from 'react'
import { GenerateRandomNumber } from './GenerateRandomNumber'
const LearnUseCallback = () => {
    const[count,setCount]=useState(0)
    const handleIncreasecount=()=>{
        setCount((prevCount)=>prevCount+1)
    }
    const[randomNumber,setRandomNumber]=useState(0);
    const generateRandomNumber=()=>{
        const newRandomNumber=Math.floor(Math.random()*100)+1;
        setRandomNumber(newRandomNumber);
    }
  return (
    <>
      <GenerateRandomNumber randomNumber={randomNumber}
      generateRandomNumber={generateRandomNumber}/>
      <h1>Count: {count}</h1>
      <button onClick={handleIncreasecount}>Increase Count</button>
    </>
  )
}

export default LearnUseCallback

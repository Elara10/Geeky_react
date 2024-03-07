import LearnLiftingStateUp from "./components/LearnLiftingStateUp";
import LearnEvent from "./components/LearnEvent";
import LearnJSX from "./components/LearnJSX";
import LearnProps from "./components/LearnProps";
import { LearnComponent } from "./components/Learncomponenet";
import LearnState from "./components/LearnState";
import CounterApp from "./components/CounterApp";
import LearnUseEffect from "./components/LearnUseEffect";
import LearnUseMemo from "./components/LearnUseMemo";
import LearnUseCallback from "./components/LearnUseCallback";
// import { GenerateRandomNumber } from "./components/GenerateRandomNumber";

function App() {
  let roll=101
  const getdata=(data)=>{
      console.log(data)
  }

  return (
    <>
    {/* <LearnComponent/> */}
    {/* <LearnJSX/> */}
    {/* <LearnProps name="Kavya Kumari" roll={roll}/> */}
    {/* <LearnEvent/> */}
    {/* <LearnLiftingStateUp myClick={getdata} /> */}
    {/* <LearnState/> */}
    {/* <CounterApp/> */}
    {/* <LearnUseEffect/> */}
    {/* <LearnUseMemo/> */}
    <LearnUseCallback/>
    </>
  )
}

export default App

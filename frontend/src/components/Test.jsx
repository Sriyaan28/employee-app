// This component is used to demonstrate the issue with Context Provider re-rendering.
// This Test function is used in home.
import { useContext } from "react"
import { counterContextObj } from "../contexts/ContextProvider.jsx"
import { useCounterStore } from "../store/useCounterStore.js"

function Test() {
    
    const [counter, value, changeCounter, changeValue] = useContext(counterContextObj)
    const newCounter1 = useCounterStore((state)=>state.newCounter1)
    const incrementCounter1 = useCounterStore((state)=>state.incrementCounter1)

    console.log("Test component rendered")
  return (
    <div>
        <p>Value: {value} <button onClick={changeValue} className="p-2 bg-amber-300" >Change</button></p>
        <p className='mt-4'>Zustand State management</p>
        <p>New Counter 1(child): {newCounter1} <button onClick={incrementCounter1} className="p-2 bg-pink-300" >Increment Counter 1</button></p>
    </div>
  )
}

export default Test
import React from 'react'
import { useContext } from 'react'
import { counterContextObj } from '../contexts/ContextProvider.jsx'
import Test from './Test.jsx'
import { useCounterStore } from '../store/useCounterStore.js'


// Strict Mode in main.jsx renders a component twice

function Home() {
  // context provider
  const [counter, value, changeCounter, changeValue] = useContext(counterContextObj)
  
  // zustand store
  // const {newCounter, incrementCounter, decrementCounter, resetCounter} = useCounterStore() -> avoid this as it will cause entire component to re-render when any state changes in the store.
  const newCounter = useCounterStore((state)=>state.newCounter)
  const incrementCounter = useCounterStore((state)=>state.incrementCounter)
  const decrementCounter = useCounterStore((state)=>state.decrementCounter)
  const resetCounter = useCounterStore((state)=>state.resetCounter)
  // fn to increment newCounter to 500 and decrement newCounter by 20
  const setCounterto500 = useCounterStore((state)=>state.setCounterto500)
  const decrementCounterby20 = useCounterStore((state)=>state.decrementCounterby20)
  console.log("Home component rendered")
  return (
    <div className='p-5'>
        <h1 className='text-center text-4xl font-bold'>Home</h1>
        <p className='text-center  text-5xl text-olive-600 mt-50 block '>Welcome to the Employee Management App!</p>
        <p className='mt-4'>Context API state management</p>
        <p>Counter: {counter} <button onClick={changeCounter} className='bg-amber-400 px-2 text-center'>+</button></p>
        <Test />   {/* Child component which rerenders Home component too when context changes */}
        <p >NEW Counter(Parent): {newCounter} <button onClick={incrementCounter} className='bg-amber-400 px-2 text-center'>+</button> <button onClick={decrementCounter} className='bg-amber-400 px-2 text-center'>-</button> <button onClick={resetCounter} className='bg-amber-400 px-2 text-center'>Reset</button></p>
        <p className='mt-10'>Change newCounter</p>
        <button onClick={setCounterto500} className='m-2 p-2 bg-green-500'>newCounter to 500</button>
        <button onClick={decrementCounterby20} className='m-2 p-2 bg-red-500'>newCounter - 20</button>
    </div>
  ) 
}

export default Home
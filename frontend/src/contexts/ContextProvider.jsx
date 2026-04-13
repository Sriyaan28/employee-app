import { createContext, useState } from 'react'

// create context provider object
export const counterContextObj = createContext();

function ContextProvider({children}) 
{
    const [counter,setCounter] = useState(10);
    const [value,setValue] = useState(0)
    const changeCounter = ()=>{
        setCounter(counter+1)
    }
    const changeValue = ()=>{
      setValue(value-1)
    }


  return (<counterContextObj.Provider value={[counter,value,changeCounter,changeValue]}>
    {children}
  </counterContextObj.Provider>)
}

export default ContextProvider
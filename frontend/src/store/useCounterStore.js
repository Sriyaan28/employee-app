import {create} from 'zustand'

// create store - use hook naming convention as create creates a custom hook
export const useCounterStore = create((set)=>({
    // state
    newCounter:0,
    newCounter1:100,
    // fn to modify state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    resetCounter:()=>set({newCounter:0}),
    setCounterto500:()=>set({newCounter:500}),
    decrementCounterby20:()=>set(state=>({newCounter:state.newCounter-20})),
    incrementCounter1:()=>set(state=>({newCounter1:state.newCounter1+1})),
    decrementCounter1:()=>set(state=>({newCounter1:state.newCounter1-1})),
    resetCounter1:()=>set({newCounter1:100}),

    // user state
    user:{name:"pp",email:"pp@gmail.com",age:20},
    // fn to update email
    changeEmail:()=>set({...user,email:"pp1@gmail.com"}),
    // fn to change name and age
    changeNameAndAge:()=>set({...user,name:"pp1",age:19})

}))


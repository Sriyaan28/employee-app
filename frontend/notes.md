# State Management
    - We are using React's `useState` and `useEffect` hooks for managing state in our application. The `useState` hook allows us to create state variables and update them, while the `useEffect` hook is used to perform side effects such as fetching data from an API when the component mounts.
    
    - State management is sharing data between components and keeping a state sync across app.

    - Can be done by using props drilling, context API, redux/zustand.
      - Props drilling is passing data from parent component to child component through props. It can be tedious and error prone if the component hierarchy is deep.
      - Context API is a way to share data between components without passing props through every level of the component tree. It is useful for global state management but can lead to performance issues if not used carefully.
      - Redux and Zustand are state management libraries that provide a more structured way to manage state in a React application. They allow for better organization of state and can help with performance optimization.

# Context API
 - import createContext from react and create a context object.
 - add state to the context object.
 - wrap the component tree with the context provider and pass the state as a value.
 - use the useContext hook to consume the context in any component that needs access to the state.

 Issues with Context API:
  - Context with useState hook is a best and simple state management mechanism for small applications.
  - but can lead to performance issues if not used carefully, as it can cause unnecessary re-renders of components when multiple states are there in a context.
  - Happens due to the fact that when context value changes, it creates a copy of entire context object and all components that consume the context will re-render.
  - To overcome this issue, we can create multiple contexts and each context have a single state.
  - When the application size is huge, then maintainance of multiple context is an issue. For such large applications, advanced state management tools like *REDUX / ZUSTAND* can be used.

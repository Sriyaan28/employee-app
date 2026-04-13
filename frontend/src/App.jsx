import { createBrowserRouter,RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout.jsx"
import Home from "./components/Home.jsx"
import CreateEmployee from "./components/CreateEmployee.jsx"
import EmployeeList from "./components/EmployeeList.jsx"
import Employee from "./components/Employee.jsx"
import EditEmployee from "./components/EditEmployee.jsx"

function App() {
  const routerObj = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:"",
          element: <Home />
        },
        {
          path:"create-employee",
          element: <CreateEmployee />
        },
        {
          path: "list-of-employees",
          element: <EmployeeList />
        },
        {
          path: "employee",
          element: <Employee />
        },
        {
          path: "edit-employee",
          element: <EditEmployee />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={routerObj} />
  )
}

export default App
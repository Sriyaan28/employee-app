import Header from "./Header.jsx"
import { Outlet } from "react-router"

function RootLayout() {
  return (
    <div>
        <Header />
        <div className=" min-h-screen bg-gray-100 mx-20">
            <Outlet />
        </div>
    </div>
  )
}

export default RootLayout
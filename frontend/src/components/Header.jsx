import { NavLink } from "react-router"

function Header() {
  return (
    <div className="p-5 bg-gray-200">
        <ul className=" flex justify-end gap-5">
            <li>
                <NavLink to="/" className={({isActive})=>( isActive?" border border-none rounded-xl bg-blue-300 text-blue-700 p-2":"p-2 ")}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/create-employee" className={({isActive})=>( isActive?" border border-none rounded-xl bg-blue-300 text-blue-700 p-2":"p-2")}>Create Employee</NavLink>
            </li>
            <li>
                <NavLink to="/list-of-employees" className={({isActive})=>( isActive ?" border border-none rounded-xl bg-blue-300 text-blue-700 p-2":"p-2")}>Employees</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Header
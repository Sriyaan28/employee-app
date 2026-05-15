import { useState, useEffect } from "react"
import Loading from "./Loading.jsx"
import { useNavigate } from "react-router"
import axios from "axios"

function EmployeeList() {
    const [employees, setEmployees] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate();


    async function getEmployees() {
        setLoading(true)
        try {
            let res = await fetch('https://employee-app-ebon-ten.vercel.app/employee-api/employee')
            if (res.status === 200) {
                // add employees to state variable
                let resObj = await res.json()
                setEmployees(resObj.payload)
            }
        }
        catch (error) {
            console.log(error)
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getEmployees()
    }, [])

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <p className="text-center text-2xl text-red-500">{error.message}</p>
    }
    // navigating links
    // view
    const getEmployee = (obj) => {
        navigate('/employee', { state: obj })
    }
    // edit
    const editEmployee = (obj) => {
        navigate('/edit-employee', { state: obj })
    }
    // delete
    const deleteEmployee = async (eid) => {
        const res = await axios.delete(`http://localhost:3000/employee-api/employee/${eid}`)
        if (res.status === 200) {
            // fetch the data from db
            getEmployees()
        }
    }

    return (
        <div className='p-5'>
            <h1 className='text-center text-4xl'>Employee List</h1>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-5 text-center">
                {
                    employees.map((empObj) => (

                        <div key={empObj._id} className="bg-white p-4 rounded-lg shadow">
                            <p>{empObj.name}</p>
                            <p>{empObj.email}</p>
                            <div className="flex justify-around mt-4">
                                <button onClick={() => getEmployee(empObj)} className=" bg-gray-300 py-1 px-2 hover:bg-green-300 shadow-green-600 hover:shadow rounded-xl">👁️</button>
                                <button onClick={() => editEmployee(empObj)} className=" bg-gray-300 py-1 px-2 hover:bg-yellow-300 shadow-yellow-500 hover:shadow rounded-xl">✏️</button>
                                <button onClick={() => deleteEmployee(empObj._id)} className=" bg-gray-300 py-1 px-2 hover:bg-red-400 shadow-red-600 hover:shadow rounded-xl">🗑️</button>
                            </div>
                        </div>)

                    )
                }
            </div>
        </div>
    )
}

export default EmployeeList
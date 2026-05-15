import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading.jsx";

function EditEmployee() {
    // get employeeDetails
    const { state } = useLocation()
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    // set existing values of the employee 
    useEffect(() => {
        setValue("name", state.name)
        setValue("email", state.email)
        setValue("mobile", state.mobile)
        setValue("designation", state.designation)
        setValue("companyName", state.companyName)
    })

    const saveModifiedEmployee = async (modifiedEmployeeObj) => {
        setLoading(true)
        try {
            console.log(modifiedEmployeeObj)
            // make HTTP PUT request to update employee details in backend
            const res = await axios.put(`https://employee-app-ebon-ten.vercel.app/_/backend/employee-api/employee/${state._id}`, modifiedEmployeeObj)

            if (res.status === 200) {
                console.log("Updated user successfully")
                navigate("/list-of-employees")
            }
            else {
                const errorResponse = await res.json()
                throw new Error(errorResponse.message)
            }

        }
        catch (error) {
            console.log(error)
            setError(error.message)
        }
        finally {
            setLoading(false)
        }
    }
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <p className="text-center text-2xl text-red-500">{error}</p>
    }

    return (
        <div className='p-5'>
            <h1 className='text-center text-4xl mb-10'>Edit Employee</h1>
            <form onSubmit={handleSubmit(saveModifiedEmployee)} className="w-full max-w-md mx-auto border-4 rounded-2xl p-10 shadow-2xl">
                <label htmlFor="name">Name:</label>
                <input type="text" {...register("name")} id="name" placeholder="Enter Name of Employee" className="w-full p-3 my-2 border-2 rounded-2xl" />
                <label htmlFor="email">Email:</label>
                <input type="text" {...register("email")} id="email" placeholder="Enter Email of Employee" className="w-full p-3 my-2 border-2 border-red-500 rounded-2xl"
                    disabled />
                {/* disabled property is used to disable the input*/}
                <label htmlFor="mobile">Mobile no:</label>
                <input type="number" {...register("mobile")} id="mobile" placeholder="Enter Mobile number of Employee" className="w-full p-3 my-2 border-2 rounded-2xl" />
                <label htmlFor="designation">Designation:</label>
                <input type="text" {...register("designation")} id="designation" placeholder="Designation of Employee" className="w-full p-3 my-2 border-2 rounded-2xl" />
                <label htmlFor="companyName">Company name:</label>
                <input type="text" {...register("companyName")} id="companyName" placeholder="Company Name" className="w-full p-3 my-2 border-2 rounded-2xl" />
                <button type="submit" className="bg-gray-800 hover:bg-gray-950 p-3 rounded-xl block mx-auto text-white">Save</button>
            </form>
        </div>
    )
}

export default EditEmployee
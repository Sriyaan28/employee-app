import { useForm } from "react-hook-form"
import { useState } from "react" 
import Loading from "./Loading.jsx"
import { useNavigate } from "react-router"

function CreateEmployee() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()


    const onFormSubmit = async (newEmployeeObj) => {
        try{
            setLoading(true)
            console.log(newEmployeeObj)
            // make HTTP post request
            const res = await fetch("http://localhost:3000/employee-api/employee", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newEmployeeObj)
            })
            if(res.status === 201)
            {
                console.log("Employee created")
                navigate("/list-of-employees")
            }
            else
            {
                // throw error to be caught in catch block
                const errorResponse = await res.json()
                throw new Error(errorResponse.message)
            }
        }
        catch(error)
        {
            setError(error)
        }
        finally
        {
            setLoading(false)
        }
    }
    if(loading)
    {
        return <Loading />
    }
    if(error)
    {
        return <p className="text-center text-2xl text-red-500">{error.message}</p>
    }

    return (
        <div className='p-5' onSubmit={handleSubmit(onFormSubmit)}>
            <h1 className='text-center text-4xl mb-10'>Create New Employee</h1>
            <form className="w-full max-w-md mx-auto border-4 rounded-2xl p-10 shadow-2xl">
                <label htmlFor="name">Name:</label>
                <input type="text" {...register("name")} id="name" placeholder="Enter Name of Employee" className="w-full p-3 my-2 border-2 rounded-2xl" />
                <label htmlFor="email">Email:</label>
                <input type="text" {...register("email")} id="email" placeholder="Enter Email of Employee" className="w-full p-3 my-2 border-2 rounded-2xl" />
                <label htmlFor="mobile">Mobile no:</label>
                <input type="number" {...register("mobile")} id="mobile" placeholder="Enter Mobile number of Employee" className="w-full p-3 my-2 border-2 rounded-2xl" />
                <label htmlFor="designation">Designation:</label>
                <input type="text" {...register("designation")} id="designation" placeholder="Designation of Employee" className="w-full p-3 my-2 border-2 rounded-2xl" />
                <label htmlFor="companyName">Company name:</label>
                <input type="text" {...register("companyName")} id="companyName" placeholder="Company Name" className="w-full p-3 my-2 border-2 rounded-2xl" />
                <button type="submit" className="bg-gray-800 hover:bg-gray-950 p-3 rounded-xl block mx-auto text-white">Submit</button>
            </form>
        </div>
    )
}

export default CreateEmployee
import { useLocation } from "react-router"

function Employee() {
    const result = useLocation()
    const employeeDetails = result.state
  return (
    <div>
        <h1 className="text-center text-4xl font-bold mb-5">Employee Details</h1>
        <div className="text-2xl mt-40 p-10 border border-none rounded-2xl bg-gray-300 w-md mx-auto font-bold hover:shadow-2xl">
            <p>Name: {employeeDetails.name}</p>
            <p>Email: {employeeDetails.email}</p>
            <p>Mobile no: {employeeDetails.mobile}</p>
            <p>Designation: {employeeDetails.designation}</p>
            <p>Company: {employeeDetails.companyName}</p>
        </div>
    </div>
  )
}

export default Employee
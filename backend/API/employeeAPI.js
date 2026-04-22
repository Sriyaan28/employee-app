import exp from 'express'
import { EmployeeModel } from '../models/EmployeeModel.js'

export const employeeApp = exp.Router()

// Create new Employee
employeeApp.post('/employee',async(req,res)=>{
    
    // get employee data from req body
    const newEmployee = req.body;

    // Create new Employee object
    const newEmployeeObj = new EmployeeModel(newEmployee)

    // save
    await newEmployeeObj.save()

    // send response
    res.status(201).json({message:"New User created",payload:newEmployeeObj})
})

// Read all employees
employeeApp.get('/employee',async(req,res)=>{
    // fetch employee list from db
    const employeeList = await EmployeeModel.find()
    // send response
    res.status(200).json({message:"List of Employees",payload:employeeList})
})

// Edit employee
employeeApp.put('/employee/:id',async(req,res)=>{
        // get employee id
        const eid = req.params.id
        // get modified employee data
        const modifiedEmployee = req.body

        // findByIdandUpdate
        const updatedEmployee = await EmployeeModel.findByIdAndUpdate(eid,
            {$set:{...modifiedEmployee}},
            {returnDocument:'after',runValidators:true} // new option in mongoose v7, use 'new' in older versions, returnDocument:'after' returns the updated document.
        )
        // send res
        res.status(200).json({message:"Employee data updated",payload:updatedEmployee})
})

// Delete employee by email
employeeApp.delete("/employee",async(req,res)=>{
    const email = req.body.email
    // find user by email and delete
    let deletedUser = await EmployeeModel.findOneAndDelete({email})
    if(!deletedUser)
    {
        return res.status(404).json({message:"Employee not found"})
    }
    // send response
    res.status(200).json({message:"Employee deleted"})
})


// Delete employee by id
employeeApp.delete("/employee/:id",async(req,res)=>{
        const eid = req.params.id
        // find user by ID and delete
        let deletedUser = await EmployeeModel.findByIdAndDelete(eid)
        if(!deletedUser)
        {
            return res.status(404).json({message:"Employee not found"})
        }
        // send response
        res.status(200).json({message:"Employee deleted"})
    })
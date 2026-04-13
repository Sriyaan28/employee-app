import express from "express"
import { config } from "dotenv"
import { connect } from "mongoose"
import { employeeApp } from "./API/employeeAPI.js"
import cors from "cors" // cross origin resource sharing

config()
const app = express()


const port = process.env.PORT || 3000

// Middleware
//body parser middleware
app.use(express.json())
// cors middleware
app.use(cors({
    origin:['http://localhost:5173']
}))

// routes
app.use('/employee-api',employeeApp)

// Starting server
app.listen(port,()=>console.log(`Server running on port: ${port}`))

// Connect to DB server
async function connectDB() 
{
    try 
    {
        await connect(process.env.DB_URL)
        console.log("DB connection established")
    } 
    catch (error) 
    {
        console.log(error)    
    }
}
connectDB()

// error handling middleware   ----> at the end of the file
// NOTE: error => {name,message,callstack}
app.use((err,req,res,next)=>{
    console.log(err.name)
    //Validation error
    if(err.name === 'ValidationError')
    {
        return res.status(400).json({message:"Validation error occurred",error:err.message})
    }
    //CastError
    if(err.name === 'CastError')
    {
        return res.status(400).json({message: "Cast error occurred",error:err.message})
    }
    //MongooseError
    if(err.name === 'MongooseError')
    {
        return res.status(400).json({message:"Mongoose error occurred",error:err.message})
    }

    //Server side error
    res.status(500).json({message:`${err.name} occurred`,error:err.message})
})
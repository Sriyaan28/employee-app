import express from "express"
import { config } from "dotenv"
import { connect } from "mongoose"
import { employeeApp } from "./API/employeeAPI.js"
import cors from "cors"

config()

const app = express()

const port = process.env.PORT || 3000

// Middleware
app.use(express.json())

app.use(cors({
    origin: ['http://localhost:5173', "https://employee-app-ebon-ten.vercel.app", 'http://localhost:5174']
}))

// Routes
app.use('/employee-api', employeeApp)

// Start server only if STATE is NOT defined
if (!process.env.STATE) {
    app.listen(port, () => {
        console.log(`Server running on port: ${port}`)
    })
}

// Connect DB
async function connectDB() {
    try {
        await connect(process.env.DB_URL)
        console.log("DB connection established")
    }
    catch (error) {
        console.log(error)
    }
}

connectDB()

// Error handling middleware
app.use((err, req, res, next) => {

    console.log(err.name)

    // Validation Error
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            message: "Validation error occurred",
            error: err.message
        })
    }

    // Cast Error
    if (err.name === 'CastError') {
        return res.status(400).json({
            message: "Cast error occurred",
            error: err.message
        })
    }

    // Mongoose Error
    if (err.name === 'MongooseError') {
        return res.status(400).json({
            message: "Mongoose error occurred",
            error: err.message
        })
    }

    // Server Error
    res.status(500).json({
        message: `${err.name} occurred`,
        error: err.message
    })
})

export default app
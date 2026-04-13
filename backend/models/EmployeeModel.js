import { Schema, model } from "mongoose";

// create employee schema
const employeeSchema = new Schema({
    name:{
        type: String,
        required:[true,"Name field is a required attribute"]
    },
    email:{
        type:String,
        required:[true,"Email field is a required attribute"],
        unique: [true,"Email already exists"]
    },
    mobile:{
        type:Number,
        required:[true,"Number field is a required attribute"],
        unique:[true,"Mobile number already exists"]
    },
    designation:{
        type: String,
        required:[true,"Designation field is a required attribute"]
    },
    companyName:{
        type:String,
        required:[true,"Company Name field is a required attribute"]
    }
},{versionKey:false,timestamps:true})

// generate EmployeeModel
export const EmployeeModel = new model("employee",employeeSchema)
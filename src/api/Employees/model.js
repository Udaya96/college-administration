import mongoose from 'mongoose'

const EmployeesSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true 
    },
   
    Designation: {
        type: String
    
    },
    Department: {
        type: String,

    },
    Qualification: {
        type: String,
    },
    EmployeesType:{
        type:String,
        enum:["Teaching","Non-Teaching"]
    }

}, {
    timestamps: true
});

const model = mongoose.model('Employees', EmployeesSchema)

export default model
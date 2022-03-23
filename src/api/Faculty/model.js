import mongoose from 'mongoose'

const FacultySchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
        
    },
    RegistrationNo: {
        type: Number,
        required: true,
    },
    Designation: {
        type: String
    },
    Department: {
        type: String,
        enum: ["CSE","EEE","Mech","CIVIL","IT","ECE"]
    },
    Qualification: {
        type: String,
        enum: ["Metch","Betch","Pg"]
    },
    employees:[{
      type:mongoose.SchemaTypes.ObjectId,
      ref:'Employees'
    }]

}, {
    timestamps: true
});

const model = mongoose.model('Faculty', FacultySchema)

export default model
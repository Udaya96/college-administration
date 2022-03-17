import mongoose from 'mongoose'

const FacultySchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        unique: true
    },
    RegistrationNo: {
        type: Number,
        required: true,
    },
    Designation: {
        type: String
    },
    Department: {
        type: String
    },
    Qualification: {
        type: String
    }

}, {
    timestamps: true
});

const model = mongoose.model('Faculty', FacultySchema)

export default model
import mongoose from 'mongoose'

const FacultySubjectsSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        unique: true
    },
    Subject: {
        type: String,
        required:true
    }

}, {
    timestamps: true
});

const model = mongoose.model('FacultySubjects', FacultySubjectsSchema)

export default model
import mongoose from 'mongoose'

const marksSchema = new mongoose.Schema({
    subject: {
        type: String,
    },
    marks: {
        type: Number,
    },

    TotalMarks:{
        type:String
    },
    studentId:[
    {
        type: mongoose.SchemaTypes.ObjectId,

        ref: 'Students'
    }],

    subjectId:[
    {
        type: mongoose.SchemaTypes.ObjectId,

        ref: 'FacultySubjects'

    }],

    academicyear: {

        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Academicyear'

    },
}, {
    timestamps: true
});

const model = mongoose.model('marks', marksSchema)

export default model
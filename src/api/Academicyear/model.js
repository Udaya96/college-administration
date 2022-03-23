import mongoose from 'mongoose'

const AcademicyearSchema = new mongoose.Schema({
    name:{
        type: String
        
    },
    startDate:{
        type:String
    },
    endDate:{
        type: String
    }
  
}, {
    timestamps: true
});

const model = mongoose.model('Academicyear', AcademicyearSchema)

export default model
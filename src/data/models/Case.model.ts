import mongoose from "mongoose";

const caseSchema = new mongoose.Schema({

    creationDate:{
        type: Date,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    
    genre:{
        type: String,
        required: true

    },
    lat:{
        type:Number,
        required:true
    },
    lng:{
        type: Number,
        required:true
    },
    
});

export const CaseModel = mongoose.model('Case', caseSchema)
import mongoose from "mongoose";

export const azkarShcema= new mongoose.Schema({
    title:{
        type:String
    },
    zekr:{
        type:String,
        required:true
    },
    benefit:{
        type:String,
    },
    count:{
        type:Number,
        required:true
    },
    numOfZekr:{
        type:Number
    }
})
export const azkarModel=mongoose.model("azkar",azkarShcema)
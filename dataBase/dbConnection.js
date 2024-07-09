import mongoose from "mongoose"

export const dbConnection=()=>{
    mongoose.connect('mongodb+srv://ahmedrafat12:ahmedrafat12345@cluster0.mnfstos.mongodb.net/ayah').then(()=>{
        console.log('database connected');
    }).catch((err)=>{
        console.log('database not connected');
    })
}
import { azkarModel } from "../../../dataBase/models/azkar.model.js"

const addZekr=async(req,res)=>{
    const {title,zekr,benefit,count,numOfZekr} = req.body
    let azkar = await azkarModel.findOne({zekr})
    if(azkar){
        res.json({message:"zekr already added"})
    }else{
        await azkarModel.insertMany({title,zekr,benefit,count,numOfZekr})
        res.json({message:"success"})
    }
}
const getAllAzkar=async(req,res)=>{
    let allAzkar=await azkarModel.find()
    res.json({message:"success",allAzkar})
}

const updateAzkar=async(req,res)=>{
    const {title,zekr,benefit,count,numOfZekr,_id} = req.body
   try{
    let azkar = await azkarModel.findById({_id})
    if(azkar){
      let updateZekr=await azkarModel.findByIdAndUpdate({_id},{title,zekr,benefit,count,numOfZekr},{new:true})
      res.json({message:"updated successffuly",updateZekr})
    }else{
        res.json({message:"zekr not found"})
    }
   }catch(error){
    res.json({message:"server error"})
   } 
}
const deleteAzkar=async(req,res)=>{
    const {_id} = req.body
    let deletedAzkar=await azkarModel.findById({_id})
    if(deletedAzkar){
        await azkarModel.findByIdAndDelete({_id})
        res.json({message:"deleted successffuly"})
    }else{
        res.json({message:"zekr not found"})
    }
}

export{
    addZekr,
    getAllAzkar,
    updateAzkar,
    deleteAzkar
}
import { userModel } from "../../../dataBase/models/user.model.js"


export const login=async(req,res)=>{
    const {name}=req.body
    let user=await userModel.findOne({name})
    if(user){
        res.json({message:"name already used"})

    }else{
        let token=name
        await userModel.insertMany({name})
        res.json({message:"success",token})
    }

}
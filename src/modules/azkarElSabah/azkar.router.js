
import express from "express"
import { addZekr, deleteAzkar, getAllAzkar, updateAzkar } from "./azkar.controller.js"

const azkarElSabahRouter=express.Router()

azkarElSabahRouter.post("/addZekr",addZekr)
azkarElSabahRouter.get("/getAllAzkar",getAllAzkar)
azkarElSabahRouter.put("/updateAzkar",updateAzkar)
azkarElSabahRouter.delete("/deleteAzkar",deleteAzkar)

export default azkarElSabahRouter
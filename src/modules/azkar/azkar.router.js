
import express from "express"
import { addZekr, deleteAzkar, getAllAzkar, updateAzkar } from "./azkar.controller.js"

const azkarRouter=express.Router()

azkarRouter.post("/addZekr",addZekr)
azkarRouter.get("/getAllAzkar",getAllAzkar)
azkarRouter.put("/updateAzkar",updateAzkar)
azkarRouter.delete("/deleteAzkar",deleteAzkar)

export default azkarRouter
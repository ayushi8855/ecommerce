const express= require("express")
const router = express.Router()
const Category = require("../models/catemodel")


router.get("/",async(req,res)=>{
    try{
        const category=await Category.find().lean().exec()
        return res.status(200).send(category)
    }
    catch(err){
  return res.status(500).send(err.message)
    }
})
router.post("/",async(req,res)=>{
    try {
        const category =await Category.create(req.body)
        return res.status(201).send(category)
    } catch (error) {
        return res.status(500).send(err.message)
    }
})
module.exports=router
const express= require("express")
const router = express.Router()
const  Brand = require("../models/brand")


router.get("/",async(req,res)=>{
    try{
        const brand=await Brand.find().lean().exec()
        return res.status(200).send(brand)
    }
    catch(err){
  return res.status(500).send(err.message)
    }
})
router.post("/",async(req,res)=>{
    try {
        const brand =await Brand.create(req.body)
        return res.status(201).send(brand)
    } catch (error) {
        return res.status(500).send(err.message)
    }
})
router.get("/:id",async(req,res)=>{
    try {
        const brand =await Brand.findById(req.params.id)
        return res.status(201).send(brand)
    } catch (error) {
        return res.status(500).send(err.message)
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        const brand =await Brand.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send(brand)
    } catch (error) {
        return res.status(500).send(err.message)
    }
})
module.exports=router
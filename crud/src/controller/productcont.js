const express= require("express")
const router = express.Router()

const Product = require("../models/productmodel")


router.get("/",async(req,res)=>{
    try{
        const product=await Product.find().lean().exec()
        return res.status(200).send(product)
    }
    catch(err){
  return res.status(500).send(err.message)
    }
})
router.post("/",async(req,res)=>{
    try {
        const product =await Product.create(req.body)
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send(err.message)
    }
})
router.get("/:id",async(req,res)=>{
    try {
        const product =await Product.findById(req.params.id)
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send(err.message)
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        const product =await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send(err.message)
    }
})
module.exports=router

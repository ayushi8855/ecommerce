const express= require("express")
const router = express.Router()
const User = require("../models/usermodel")


router.get("/",async(req,res)=>{
    try{
        const user=await User.find().lean().exec()
        return res.status(200).send(user)
    }
    catch(err){
  return res.status(500).send(err.message)
    }
})
router.post("/",async(req,res)=>{
    try {
        const user =await User.create(req.body)
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send(err.message)
    }
})
router.get("/:id",async(req,res)=>{
    try {
        const user =await User.findById(req.params.id)
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send(err.message)
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        const user =await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send(err.message)
    }
})
router.get("/:id/addresses",async(req,res)=>{
    try{
        const user = await User.find({"_id":req.params.id},{"address":1,"_id":0}).lean().exec()
        return res.send(user)
    }catch(error){
        return res.status(500).send(error.message)
    }
   
})

router.post("/:id/addresses",async(req,res)=>{
    try{const user = await User.findByIdAndUpdate(req.params.id,{ $push: {"address": req.body}}).lean().exec()
    return res.send(user)}
    catch(error){
        return res.status(500).send(error.message)
    }
})

router.patch("/:id/addresses/:index",async(req,res)=>{
    try{ var index = req.params.index
        const user = await User.findOneAndUpdate({"_id": req.params.id},{$set:{[`address.${index}`]: req.body}})
        return res.send(user)}
        catch(error){
            return res.status(500).send(error.message)
        }
})
module.exports=router
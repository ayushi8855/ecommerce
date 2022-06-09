const mongoose = require("mongoose")


const reveiwSchema= new mongoose.Schema({
   
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
 
})
const reveiw = mongoose.model("reveiw",reveiwSchema)
module.exports=reveiw
const mongoose = require("mongoose")


const brandSchema= new mongoose.Schema({
   barnd_name:{type:String},
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true
    },
 
})
const brand = mongoose.model("brand",brandSchema)
module.exports=brand
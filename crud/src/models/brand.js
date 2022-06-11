const mongoose = require("mongoose")


const brandSchema= new mongoose.Schema({
   brand_name:{type:String},
    product_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        
    },]
 
})
const brand = mongoose.model("brand",brandSchema)
module.exports=brand
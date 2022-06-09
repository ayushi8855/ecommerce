const mongoose = require("mongoose")


const productSchema= new mongoose.Schema({
    product_name:{type:String},
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:true
    },
 
})
const product = mongoose.model("product",productSchema)
module.exports=product
const mongoose = require("mongoose")


const productSchema= new mongoose.Schema({
    product_name:{type:String},
    product_img:{type:String},
    category_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
       
    },]
 
})
const product = mongoose.model("product",productSchema)
module.exports=product
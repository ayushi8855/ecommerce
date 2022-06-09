const mongoose = require("mongoose")


const categorySchema= new mongoose.Schema({
   category_name:{type:String},
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true
    },
 
})
const category = mongoose.model("category",categorySchema)
module.exports=category
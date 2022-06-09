const mongoose = require("mongoose")


const userSchema= new mongoose.Schema({
  first_name:{type:String,required:true},

  last_name:{type:String,required:true},
  mobile:{type:Number},
  email:{type:String},
  address:{
    house_no:{type:String},
    street:{type:String},
    city:{type:String},
    state:{type:String}
  },
 
})
const user = mongoose.model("user",userSchema)
module.exports=user
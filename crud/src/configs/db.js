const mongoose = require("mongoose")
const connect =()=>{
    mongoose.connect("mongodb+srv://ayushi8855:Ayujaman675@cluster0.lff3t.mongodb.net/crud_operation")
}
module.exports= connect
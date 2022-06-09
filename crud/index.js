const express = require("express")


// const express =require("express")

const connect = require("./src/configs/db");
const categorycontroller= require("./src/controller/categorycont")
const productcontroller=require("./src/controller/productcont")
const usercontroller = require("./src/controller/usercont")
const brandcontroller = require("./src/controller/brandcont")
// const router=express.Router();
const router =express()
router.use(express.json())

// const cors=require("cors")

// app.use(cors())




router.use("/category",categorycontroller)
router.use("/product",productcontroller)
router.use("/user",usercontroller)
router.use("/brand",brandcontroller)

router.listen(5000, async  ()=>{
    try {
     await connect()
    console.log("listening on port 5000");   
    } catch (error) {
        console.log(error.message);
    }
})

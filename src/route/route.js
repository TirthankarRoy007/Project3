const express = require("express")
const router = express.Router()
const urlController = require("../controller/urlController")
 

router.post("/url/shorten",urlController.createUrl)

router.get("/:urlCode",urlController.getData)

router.all("/*",(req,res)=>{
    res.status(400).send({message:"invalid path"})
})

module.exports=router;
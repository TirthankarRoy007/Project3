const express = require("express")
const router = express.Router()
const urlController = require("../controller/urlController")
 

router.post("/url/shorten", urlController.url)

router.get("/:urlCode",urlController.getUrl)

router.all("/*",(req,res)=>{
    return res.status(400).send({message:"invalid path"})
})

module.exports=router;
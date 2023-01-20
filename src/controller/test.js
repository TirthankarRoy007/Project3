const urlModel = require("../model/urlModel")

const getURl = async function(req, res){
    let cachedData = await GET_ASYNC(`${longUrl}`)
    if(cachedData) return res.status(200).send({status: true, msg: cachedData})
    else{
        let getData = await urlModel.findOne({longUrl: longUrl})
        await SET_ASYNC(`${longUrl}`)
        res.status(200).send({status: true, msg: getData})
    }
}
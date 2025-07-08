const express=require("express");
const router = express.Router();

const IceCreame = require("../models/iceCreameModel");

router.get("/",async(req,res)=>{
    try{
        const icecreamdata=await IceCreame.find();
        res.status(200).json({success:true,icecreamdata});
    }catch(err){
        console.log("Error fetching in icecreame data");
        res.status(500).json({success:false,error:'Server error'});
    }
});
module.export = router;
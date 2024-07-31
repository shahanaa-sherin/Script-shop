const router = require('express').Router();
const {SCRIPT} =require('../../models/Scripts')

router.get("/", async(req,res)=>{
    try {
        // const token = localStorage.getItem("token");
        // if(token === null){
        //     return res.status(401).send({message :"Sorry Go and login first"})
        // }else{
            const Scriptlist = await SCRIPT.find();
            return res.status(200).send({
                sucess:true,
                Scriptlist
            })
        // }
    } catch (error) {
        res.status(500).send({message:"internal server Error"})
    }
})


module.exports = router;
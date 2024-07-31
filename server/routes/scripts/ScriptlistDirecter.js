const router = require('express').Router();
const {SCRIPT} = require('../../models/Scripts');

router.get('/',async(req,res)=>{
    try {
        
        const Scriptlist = await SCRIPT.find();
        return res.status(200).send({
            sucess:true,
            Scriptlist
        })
    } catch (error) {
        res.status(500).send({message:"internal server Error"})
    }
})


module.exports = router;
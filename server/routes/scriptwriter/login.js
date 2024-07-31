const bcrypt = require('bcrypt');
const joi = require('joi');
const express = require('express');
const {ScriptWriter} = require('../../models/scriptwriter');
const router = express.Router();
const genAuthToken = require('../../Token/genAuthTokenWriter');


router.post("/",async (req,res)=>{
    const schema= joi.object({
        Email: joi.string().required(),
        Password: joi.string().min(8).required(),
    });

    const {error} = schema.validate(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    let User = await ScriptWriter.findOne({email: req.body.Email});
    
    if(!User){ 
        return res.status(400).send("INVALID Email ID");
    }

    const isValid = await bcrypt.compare(req.body.Password,User.password)

    if(!isValid) return res.status(400).send("INVALID Password");

    const token = genAuthToken(User)

    res.status(200).send(token)
})

module.exports = router;
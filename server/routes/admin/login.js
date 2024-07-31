const bcrypt = require('bcrypt');
const joi = require('joi');
const express = require('express');
const {ADMIN} = require('../../models/Admin');
const router = express.Router();
const genAuthToken = require('../../Token/genAuthTokenADMIN');


router.post("/",async (req,res)=>{
    const schema= joi.object({
        Username: joi.string().min(1).required(),
        Password: joi.string().min(8).required(),
    });

    const {error} = schema.validate(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    let User = await ADMIN.findOne({Username: req.body.Username});

    console.log(User);
    if(!User){ 
        return res.status(400).send("INVALID ADMIN USER NAME");
    }

    const isValid = bcrypt.compare(req.body.Password,User.password)

    if(!isValid) return res.status(400).send("INVALID Password");

    const token = genAuthToken(User)

    res.status(200).send(token)
})

module.exports = router;
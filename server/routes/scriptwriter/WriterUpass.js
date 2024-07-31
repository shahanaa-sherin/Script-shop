const bcrypt = require('bcrypt');
const joi = require('joi');
const router = require('express').Router();
const {ScriptWriter} = require('../../models/scriptwriter');

router.patch("/", async(req,res)=>{
    const schema = joi.object({
        Currentpassword: joi.string().min(8).max(30).required(),
        Newpassword: joi.string().min(8).max(30).required(),
        Confirmpassword: joi.string().min(8).max(30).required(),
        Email: joi.string().min(4).required(),
    });
    
    try {
    const {error} = schema.validate(req.body);
    
    if (error) return res.status(400).send(error.details[0].message);

    if(req.body.Newpassword != req.body.Confirmpassword){
        return res.status(400).send("New Password and Confirm Password not match")
    }

    let User = await ScriptWriter.findOne({ email: req.body.Email });

    const isValid =await bcrypt.compare(req.body.Currentpassword,User.password)

    if(!isValid) return res.status(400).send("INVALID Current Password");

    const salt = await bcrypt.genSalt(10);

    let Cpass = await bcrypt.hash(req.body.Newpassword, salt);

    let newData =await ScriptWriter.findOneAndUpdate({email:User.email},{
        password:Cpass,
    })

    newData.save();

    return res.status(200).send("Password Update SucessFully");
} catch (error) {
    res.status(500).send({message:"internal server Error"});
    console.log(error.message)
}

});

module.exports = router;

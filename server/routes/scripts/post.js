const joi = require('joi');
const express = require("express");
const {SCRIPT } = require('../../models/Scripts');
const {ScriptWriter} = require('../../models/scriptwriter')
const router = express.Router();

router.post("/", async (req, res) => {
  const schema = joi.object({
    Moviename: joi.string().min(4).max(200).required(),
    Synopsis: joi.string().min(1).max(200).required(),
    Genre: joi.string().min(4).max(200).required(),
    ScriptType: joi.string().min(2).max(200).required(),
    ScriptFile: joi.string().required(),
    Useremail: joi.string().min(1).required(),
  });


  const ScriptUpload = {
    Moviename: req.body.Moviename,
    Synopsis: req.body.Synopsis,
    Genre: req.body.Genre,
    ScriptType: req.body.ScriptType,
    ScriptFile: req.body.ScriptFile,
    Useremail: req.body.Useremail,
  };
  
  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let User = await ScriptWriter.findOne({ email: ScriptUpload.Useremail });

  if (!User) return res.status(400).send("User not exist...GO to LOGIN");

  User = new SCRIPT(ScriptUpload);

  User = await User.save();

  return res.status(200).send("Published suceccfully")
});

module.exports = router;

const bcrypt = require("bcrypt");
const joi = require("joi");
const express = require("express");
const { DIRECTOR } = require("../../models/director");
const router = express.Router();
const genAuthToken = require("../../Token/genAuthTokenDirector");

router.post("/", async (req, res) => {
  const schema = joi.object({
    Username: joi.string().min(4).max(30).required(),
    Email: joi.string().min(4).required(),
    Password: joi.string().min(8).max(30).required(),
    ConfirmPassword: joi.string().min(8).max(30).required(),
  });

  const director = {
    fname: req.body.Firstname,
    email: req.body.Email,
    password: req.body.Password,
  };

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  if (req.body.Password != req.body.ConfirmPassword) {
    return res.status(400).send("Password and Confirm Password not same");
  }

  let User = await DIRECTOR.findOne({ email: director.email });

  if (User) return res.status(400).send("User already exist...GO to LOGIN");

  User = new DIRECTOR(director);

  const salt = await bcrypt.genSalt(10);

  User.password = await bcrypt.hash(User.password, salt);

  User = await User.save();

  const token = genAuthToken(User);

  res.send(token);
});

module.exports = router;

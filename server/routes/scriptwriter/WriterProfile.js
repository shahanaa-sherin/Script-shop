const router = require("express").Router();
const joi = require("joi");
const { ScriptWriter } = require("../../models/scriptwriter");

router.patch("/", async (req, res) => {
  const schema = joi.object({
    image: joi.string(),
    Username: joi.string().min(3).max(30).required(),
    Businessmail: joi.string().min(4).max(30).required(),
    Phonenumber: joi.string().min(10).required(),
    Email:joi.string(),
  });

  const Data = {
    image: req.body.image,
    Username: req.body.Username,
    Businessmail: req.body.Businessmail,
    Phonenumber: req.body.Phonenumber,
  };
  try {
    const { error } = schema.validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    let newData = await ScriptWriter.findOneAndUpdate(
      { email: req.body.Email },
      {
        image: Data.image,
        Username: Data.Username,
        Businessmail: Data.Businessmail,
        Phonenumber: Data.Phonenumber,
      }
    );

    newData.save();

    return res.status(200).send("Profile Update SucessFully");
  } catch (error) {
    res.status(500).send({ message: "internal server Error" });
    console.log(error.message);
  }
});

module.exports = router;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Moviename: { type: String, require: true, minlength: 4, maxlength: 200 },
  Synopsis: { type: String, require: true, minlength: 4, maxlength: 200 },
  Genre: { type: String, require: true, minlength: 4, maxlength: 200 },
  ScriptType: { type: String, require: true, minlength: 2, maxlength: 200 },
  ScriptFile: { type: String, require: true },
  Useremail: { type: String, require: true },
});

const Script = mongoose.model("scripts", userSchema);

exports.SCRIPT = Script;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: { type: String, require: true, minlength: 4, maxlength: 30 },
  email: { type: String, require: true,unique:true},
  password:{ type:String,require:true,minlength:8,maxlength:300},
  Username:{type:String,minlength:3,maxlength:30},
  image:{type:String},
  Businessmail:{type:String,unique:true},
  Phonenumber:{type:String,unique:true},
});


const ScriptWriter = mongoose.model("scriptwriter",userSchema)

exports.ScriptWriter =ScriptWriter;
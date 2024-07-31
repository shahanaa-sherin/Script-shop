const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: { type: String, require: true, minlength: 4, maxlength: 30 },
  email: { type: String, require: true,unique:true},
  password:{ type:String,require:true,minlength:8,maxlength:300},
});


const DIRECTOR = mongoose.model("director",userSchema)

exports.DIRECTOR =DIRECTOR;
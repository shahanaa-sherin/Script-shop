require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const scriptregister = require('./routes/scriptwriter/registers');
const scriptlogin = require('./routes/scriptwriter/login');
const directregister = require('./routes/director/register');
const directorlogin = require('./routes/director/login');
const adminlogin = require('./routes/admin/login');
const Scriptpost = require('./routes/scripts/post');
const Scriptlist = require('./routes/director/scriptlist')
const ScriptlistWriter = require('./routes/scripts/ScriptlistWriter.js')
const ScriptlistDirecter = require('./routes/scripts/ScriptlistDirecter.js')
const WriterUpass = require('./routes/scriptwriter/WriterUpass.js')
const WriterProfile = require('./routes/scriptwriter/WriterProfile.js')
const Stripe =require('./routes/Stripepayment/Stripepayment')

const port= process.env.PORT || 5000;
const uri =process.env.DB_URI;
const app = express();

//middlewares
app.use(express.json({limit:"50mb"})); 
app.use(express.urlencoded({extended:false,limit:"500mb"}))
app.use(cors())

// Script Writer apis
app.use("/api/Sregister",scriptregister);
app.use("/api/Slogin",scriptlogin);
app.use("/api/Wscript",ScriptlistWriter);
app.use("/api/WUpass",WriterUpass)
app.use("/api/Wprofi",WriterProfile)

// Director APIs
app.use("/api/Dregister",directregister);
app.use("/api/Dlogin",directorlogin);
app.use("/api/Dscript",Scriptlist);
app.use("/api/Dscript",ScriptlistDirecter);

// ADMIN APIS
app.use("/api/Alogin",adminlogin);

// Script Post Api
app.use('/api/scriptpost',Scriptpost);

// payment Api
app.use('/api/stripe',Stripe);

//welcome api
app.get('/',(req,res)=>{
    res.status(200).send("Welcome to our SCRIPT-SHOP Api....");
})

app.listen(port,()=> console.log(`server start at ${port}`));


mongoose.connect(uri,{
    useNewUrlParser:true,
    USeUnifiedTopology:true,
})
.then(()=> console.log("MongoDB connection successful..."))
.catch((err)=> console.log("MongoDB connection failed",err.message))
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Update_pass.css";
import uppwd from "../../Assets/updatepwd/updpwd.png";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CLearupass, Updatepass } from "../../Redux/Slices/UpdatepassSlice";
import tik from '../../Assets/publish/tic.png';

function Update_pass() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {email} = useSelector(state=>state.auth)
  const {Updatepassmessage,UpdatepassStatus}= useSelector(state=>state.upass)

  const [Data, setData] = useState({
    Currentpassword: "",
    Newpassword: "",
    Confirmpassword: "",
    Email: "",
  });

  useEffect(()=>{
    setData({...Data,Email:email})
    const fileRefresh=()=>{
    if(UpdatepassStatus === 'Sucess'){
      setTimeout(()=>{
        navigate('/WriterHome')
        dispatch(CLearupass())
      },3000)
    }
  }
  fileRefresh()
  },[email,UpdatepassStatus])

  const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch(Updatepass(Data))
  }

  return (
    <>
     {UpdatepassStatus === 'Sucess' && (
    <div className="main-Toast">
        <div className="sucess-msg">
          <img className="image-tik" src={tik} alt="some" />
          <span>{Updatepassmessage}</span>
        </div>
        </div>
           )}
      <Navbar />
      <Grid container>
        <Grid item md={5}>
          <form className="pwdframe" onSubmit={handleSubmit}>
            <h3 className="uphd">Update your password</h3>
            <input
              type="text"
              placeholder="Current Password"
              className="Cpwd"
              onChange={(e) =>
                setData({ ...Data, Currentpassword: e.target.value })
              }
            />
            <br></br>
            <input
              type="text"
              placeholder="New Password"
              className="Cpwd"
              onChange={(e) =>
                setData({ ...Data, Newpassword: e.target.value })
              }
            />
            <br></br>
            <input
              type="text"
              placeholder="Confirm  Password"
              className="Cpwd"
              onChange={(e) =>
                setData({ ...Data, Confirmpassword: e.target.value })
              }
            />
            <br></br>
            <button type="submit" className="pwdbtn">
              Update
            </button>
            <br />
            <br />
          </form>
        </Grid>
        <Grid item md={7}>
          <div className="pwdframe1">
            <img src={uppwd} alt="uppwd" className="pwdimg" />
          </div>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Update_pass;

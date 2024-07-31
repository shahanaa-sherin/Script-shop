import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Displaypic from "../../../Assets/Profilepictures/Dp.png";
import profilepic from "../../../Assets/Profilepictures/profilepic.png";
import "./Profile.css";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useDispatch, useSelector } from "react-redux";
import { CLearuprofile, Updateprofile } from "../../../Redux/Slices/ProfileSlice";
import tik from "../../../Assets/publish/tic.png";
import { useNavigate } from "react-router-dom";
function Profile() {

  const { UserType, email } = useSelector((state) => state.auth);
  const {UpdateprofileStatus,Updateprofilemessage} = useSelector(state=>state.profileu)

  const dispatch =useDispatch();
  const navigate =useNavigate();
  const [data, setdata] = useState({
    image: "",
    Username: "",
    Businessmail: "",
    Phonenumber: "",
    Email: "",
  });

  useEffect(() => {
    setdata({ ...data, Email: email });
    if(UpdateprofileStatus === 'Sucess'){
      setTimeout(()=>{
        navigate('/WriterHome')
        dispatch(CLearuprofile())
      },2000)
    }
  }, [email,UpdateprofileStatus]);

  const handlechange = (e) => {
    let selectedFile = e.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = (e) => {
      setdata({ ...data, image: e.target.result });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Updateprofile(data))
  };
  return (
    <>
    {UpdateprofileStatus === 'Sucess' && (
    <div className="main-Toast">
        <div className="sucess-msg">
          <img className="image-tik" src={tik} alt="some" />
          <span>{Updateprofilemessage}</span>
        </div>
        </div>
           )}
      <Navbar />
      <Grid container className="container-Profile">
        <Grid
          item
          md={6}
          display={"grid"}
          justifyItems={"center"}
          position={"relative"}
        >
          <img
            src={data.image ? `${data.image}` : Displaypic}
            alt="Display"
            className="dp"
          />
          <label htmlFor="imgup" className="input-file-dp">
            <CameraAltIcon sx={{ color: "#53C352" }} color="#53C352" />
          </label>
          <form className="form-profile" onSubmit={handleSubmit}>
            <input
              type="file"
              name=""
              id="imgup"
              accept=".jpg,.png,.jpeg"
              style={{ display: "none", position: "absolute" }}
              onChange={handlechange}
            />
            <input
              className="textfield-profile"
              type="text"
              id=""
              value={`Title :${UserType}`}
              readOnly
            />
            <input
              className="textfield-profile"
              type="text"
              id=""
              placeholder="Username"
              onChange={(e) => setdata({ ...data, Username: e.target.value })}
            />
            <input
              className="textfield-profile"
              type="text"
              id=""
              placeholder="Business mail"
              onChange={(e) =>
                setdata({ ...data, Businessmail: e.target.value })
              }
            />
            <input
              className="textfield-profile"
              type="text"
              id=""
              placeholder="Phone number"
              onChange={(e) =>
                setdata({ ...data, Phonenumber: e.target.value })
              }
            />
            <input className="button-Update" type="submit" value={"Update"} />
          </form>
        </Grid>
        <Grid
          item
          md={6}
          className="right"
          justifyContent={"center"}
          display={"grid"}
        >
          <div className="frame1-div">
            <img src={profilepic} alt="profilepic" className="profilepic" />
          </div>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Profile;

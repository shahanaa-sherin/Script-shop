import { Grid } from "@mui/material";
// import Footer from "../../../Components/Footer/Footer";
// import Navbar from "../../../Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import "./Writer_Home.css";
import { UserScript } from "../../../Redux/Slices/ScriptSlice";

function Writer_Home() {

  const [Email,setemail]=useState('');
  
  const dispatch =useDispatch();
  const navigate = useNavigate();
  
  const { token, UserType,email } = useSelector((state) => state.auth);

  useEffect(() => {
    setemail(email)
    dispatch(UserScript(email));

    if (token === null) {
      navigate("/");
    } else if (UserType === "Director") {
      navigate("/Director_Home");
    }
  }, [token,email,Email]);
  
  return (
    <>
      {/* <Navbar Writer /> */}
    <Navbar/>
      <Grid container justifyContent={"center"}>
        <Grid
          item
          className="first-G-H"
          display={"grid"}
          justifyItems={"center"}
          alignItems={"center"}
        >
          <p className="first-G-para-H">
            Lorem ipsum dolor sit amet consectetur. Habitant consectetur
            porttitor tincidunt sodales sed. Volutpat adipiscing diam porttitor
            arcu vulputate sed sit massa in. Amet sit est enim arcu purus.
            Consequat laoreet duis semper suspendisse id lorem egestas. Ultrices
            at iaculis vel arcu viverra rhoncus vulputate. Enim orci molestie
            auctor orci senectus aliquam dictum amet vitae. In id tortor etiam
            tempus. Dolor quis semper sed ac. Sed ultricies sed cras amet vel
            porta.
          </p>
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          md={"8.2"}
          paddingBottom={"20px"}
        >
          <div className="second-HW-div">
            <h3 className="second-G-head-HW">Your Dashboard</h3>
          </div>
          </Grid>
        <Grid 
        item 
        md={12} 
        className="second-HW-div2" 
        justifyContent={"center"}
        >
          {/* <div className="second-HW-div2"> */}
            <button className="div2-1child">Publish Script</button>
            <button className="div2-2child">My Scripts</button>
            <button className="div2-3child">Analytics</button>
          {/* </div> */}
        </Grid>
      {/* <Footer />  */}
          <div className="second-HW-div2">
            <Link to={"/publish"}>
              <button className="div2-1child">Publish Script</button>
            </Link>
            <Link to={"/my-script"}>
              <button className="div2-2child">My Scripts</button>
            </Link>
            <Link to={"/analytics"}>
              <button className="div2-3child">Analytics</button>
            </Link>
          </div>
      </Grid>
      <Footer/>
    </>
  );
}

export default Writer_Home;

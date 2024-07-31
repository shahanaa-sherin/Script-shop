import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import loginimg from "../../Assets/Login/login.png";
import logo1 from "../../Assets/Login/logo1.png";
import logo2 from "../../Assets/Login/logo2.png";
import logo3 from "../../Assets/Login/logo3.png";

import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginDirector, loginWriter } from "../../Redux/Slices/AuthSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);

  const [display, setDisplay] = useState(false);
  const [value, setvalue] = useState("Writer");

  const [Writer, setWriter] = useState({
    Email: "",
    Password: "",
  });

  const [Director, setDirector] = useState({
    Email: "",
    Password: "",
  });

  const [emailerror, setemailerror] = useState("");

  const handlechangeemail = (e) => {
    const email = e.target.value;
    {
      value === "Writer"
        ? setWriter({ ...Writer, Email: email })
        : setDirector({ ...Director, Email: email });
    }
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!email) {
      setemailerror("Email not be empty");
    } else if (regEx.test(email)) {
      setemailerror("Valid Email");
    } else if (!regEx.test(email)) {
      setemailerror("You have entered an invalid email address!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "Writer" && emailerror === 'Valid Email') {

      function handleSubmitWriter() {
        dispatch(loginWriter(Writer));
      }
      handleSubmitWriter();
    }else{
      setemailerror('please Enter Correct format of  Email and Password')
    } 
    
    if (value === "Director") {
      function handleSubmitDirector(e) {
        dispatch(loginDirector(Director));
      }
      handleSubmitDirector(e);
    }
  };

  useEffect(() => {
    if (auth.UserType === "Writer") {
      navigate("/WriterHome");
    } else if (auth.UserType === "Director") {
      navigate("/Director_Home");
    }
  }, [auth.UserType, navigate]);

  return (
    <>
      <Grid container>
        <Grid
          item
          md={6}
          className="frame-1"
          justifyContent={"center"}
          alignItems={"start"}
          display={"grid"}
        >
          <div className="frame1-div">
            <img src={loginimg} alt="signimg" className="loginimg1" />
            <h2 className="LgHd">Lorem ipsum dolor</h2>
            <p className="Lgpara">
              Lorem ipsum dolor sit amet consectetur. Nisl ut lectus volutpat a
              urna at egestas egestas. Arcu quis est sit aliquam egestas purus
              pharetra risus consectetur. Enim in leo scelerisque feugiat nisl
              nisi aenean. Enim egestas nunc tristique integer interdum.
            </p>
          </div>
        </Grid>
        <Grid
          item
          md={6}
          className="frame-2"
          justifyContent={"center"}
          display={"grid"}
        >
          {/* img logo 1 */}
          <img src={logo1} alt="" className="logo1img" />
          <img src={logo2} alt="" className="logo2img" />
          <img src={logo1} alt="" className="logo3img" />
          <img src={logo2} alt="" className="logo4img" />
          <img src={logo3} alt="" className="logo5img" />
          <div className="frame2-div">
            <h2 className="LgHd1">
              {value === "Writer" ? "Writer Login" : "Director Login"}
            </h2>
            <form className="form-style" onSubmit={handleSubmit}>
              <div
                onClick={() => setDisplay(!display)}
                className={display ? "div-form1-login" : "div-form-login"}
              >
                <p
                  className={
                    display ? "div-span-form-login" : "div-span-value-login"
                  }
                >
                  {value}
                </p>
                <span
                  onClick={() => {
                    setvalue("Writer");
                    setDisplay(false);
                  }}
                  className={
                    display ? "div-span-form1-login" : "div-span-form-login"
                  }
                >
                  writer
                </span>
                <span
                  onClick={() => {
                    setvalue("Director");
                    setDisplay(false);
                  }}
                  className={display ? "div-span-form1" : "div-span-form"}
                >
                  director
                </span>
              </div>
              {value === "Writer" && (
                <>
                  <input
                    className="textfield-Writer-email"
                    type="text"
                    id=""
                    placeholder="Email"
                    autoComplete="off"
                    onChange={handlechangeemail}
                    value={Writer.Email}
                  />
                  {emailerror && <h1 className="emaierror">{emailerror}</h1>}
                  <input
                    className="textfield-Writer-email"
                    type="text"
                    id=""
                    placeholder="Password"
                    onChange={(e) =>
                      setWriter({ ...Writer, Password: e.target.value })
                    }
                  />
                  <input
                    className="button-submit-login"
                    type="submit"
                    value={"Login"}
                  />
                </>
              )}
              {value === "Director" && (
                <>
                  <input
                    className="textfield-Writer"
                    type="text"
                    id=""
                    placeholder="Email"
                    onChange={handlechangeemail}
                    value={Director.Email}
                  />
                  {emailerror && <h1 className="emaierror">{emailerror}</h1>}
                  <input
                    className="textfield-Writer"
                    type="text"
                    id=""
                    placeholder="Password"
                    onChange={(e) =>
                      setDirector({ ...Director, Password: e.target.value })
                    }
                  />
                  <input
                    className="button-submit-sign"
                    type="submit"
                    value={"Login"}
                  />
                </>
              )}
            </form>
            <h6 className="forgotpwd">Forgot password?</h6>
            <h6 className="forgotpwd1">
              Don’t have an Account?{" "}
              <Link className="signuplink" to={"/signup"}>
                Sign Up
              </Link>
            </h6>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;

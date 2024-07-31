import React, { useEffect, useState } from "react";
import "./Reg.css";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, registerDirector } from "../../Redux/Slices/AuthSlice";
import image from "../../Assets/Signup/signup(1).png";
import image1 from "../../Assets/Signup/signup.png";
import { useNavigate } from "react-router-dom";

function Reg() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);

  const [display, setDisplay] = useState(false);
  const [value, setvalue] = useState("Writer");
  const [Writer, setWriter] = useState({
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [errors, setErrors] = useState({
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [Director, setDirector] = useState({
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  console.log(Writer.Password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "Writer") {
      const validate = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        let upperCaseLetters = /[A-Z]/g;
        let isValid = true;
        let error = {};
        if (!Writer.Username) {
          error.Username = "Username Not be empty";
          isValid = false;
        }
        if(!Writer.Email){
          error.Email ="Email not be empty";
          isValid = false;
        }else if(!regEx.test(Writer.Email)){
          error.Email = "You have entered an invalid email address!";
          isValid = false;
        }
        if(!Writer.Password){
          error.Password = "Password Not be empty";
          isValid = false;
        }else if(Writer.Password.length + 1 <= 8){
          error.Password = "Password Must Be 8 Charecter";
          isValid = false;
        }else if(!Writer.Password.match(upperCaseLetters)){
          error.Password = "Passwod Must include UpperCaseLetter";
          isValid = false;
        }
        if(!Writer.ConfirmPassword){
          error.ConfirmPassword = "Confirm Password Not be Empty";
          isValid = false;
        }
        setErrors(error)
        return isValid;
      };
      function handleSubmitWriter(e) {
        validate();
        if(validate){
          dispatch(registerUser(Writer));
        }
      }
      handleSubmitWriter(e);
    } else if (value === "Director") {
      function handleSubmitDirector(e) {
        dispatch(registerDirector(Director));
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
          className="Grid-First"
          item
          md="6"
          xs="12"
          justifyContent={"center"}
          display={"grid"}
        >
          <div className="first-div-g">
            <img className="image-first" src={image} alt="" />
            <h3 className="heading-first-g">Lorem ipsum dolor</h3>
            <p className="para-first-g">
              Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur. Nisl ut
              lectus volutpat a urna at egestas egestas. Arcu quis est sit
              aliquam egestas purus pharetra risus consectetur. Enim in leo
              scelerisque feugiat nisl nisi aenean. Enim egestas nunc tristique
              integer interdum.
            </p>
          </div>
        </Grid>
        <Grid
          className="Grid-Second"
          item
          md="6"
          xs="12"
          justifyItems={"center"}
          alignContent={"center"}
          display={"grid"}
        >
          <img className="image-second" src={image1} alt="" />
          <h1 className="heading-second-g">
            {value === "Director" ? "Director Sign up" : "Writer Sign up"}
          </h1>
          <form onSubmit={handleSubmit} className="form-style">
            <div
              onClick={() => setDisplay(!display)}
              className={display ? "div-form1" : "div-form"}
            >
              <p className={display ? "div-span-form" : "div-span-value"}>
                {value}
              </p>
              <span
                onClick={() => {
                  setvalue("Writer");
                  setDisplay(false);
                }}
                className={display ? "div-span-form1" : "div-span-form"}
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
                  className="textfield-Writer"
                  type="text"
                  id=""
                  placeholder="Username"
                  onChange={(e) =>
                    setWriter({ ...Writer, Username: e.target.value })
                  }
                />
                {errors.Username &&
                <h1 className="emaierror">{errors.Username}</h1>
                }
                <input
                  className="textfield-Writer"
                  type="text"
                  id=""
                  placeholder="Email"
                  onChange={(e) =>
                    setWriter({ ...Writer, Email: e.target.value })
                  }
                />
                {errors.Email &&
                <h1 className="emaierror">{errors.Email}</h1>
                }
                <input
                  className="textfield-Writer"
                  type="text"
                  id=""
                  placeholder="Password"
                  onChange={(e) =>
                    setWriter({ ...Writer, Password: e.target.value })
                  }
                />
                 {errors.Password &&
                <h1 className="emaierror">{errors.Password}</h1>
                }
                <input
                  className="textfield-Writer"
                  type="text"
                  id=""
                  placeholder="Confirm Password"
                  onChange={(e) =>
                    setWriter({ ...Writer, ConfirmPassword: e.target.value })
                  }
                />
                 {errors.ConfirmPassword &&
                <h1 className="emaierror">{errors.ConfirmPassword}</h1>
                }
              </>
            )}
            {value === "Director" && (
              <>
                <input
                  className="textfield-Writer"
                  type="text"
                  id=""
                  placeholder="Username"
                  onChange={(e) =>
                    setDirector({ ...Director, Username: e.target.value })
                  }
                />
                <input
                  className="textfield-Writer"
                  type="text"
                  id=""
                  placeholder="Email"
                  onChange={(e) =>
                    setDirector({ ...Director, Email: e.target.value })
                  }
                />
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
                  className="textfield-Writer"
                  type="text"
                  id=""
                  placeholder="Confirm Password"
                  onChange={(e) =>
                    setDirector({
                      ...Director,
                      ConfirmPassword: e.target.value,
                    })
                  }
                />
              </>
            )}
            <input
              className="button-submit-sign"
              type="submit"
              value={"Sign up"}
            />
          </form>
        </Grid>
      </Grid>
    </>
  );
}

export default Reg;

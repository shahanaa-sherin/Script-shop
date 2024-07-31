import "./App.css";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";

import Login from "./Auth/Login/Login";
import My_script from "./pages/Writer/My_script/my_script";
import Landingpage from "./Auth/Landing page/Landingpage";
import Reg from "./Auth/SignUp/Reg";
import Update_pass from "./Auth/Update Password/Update_pass";
import Publish from "./pages/Writer/Publish/Publish";
import Writer_Home from "./pages/Writer/Writer_Home/Writer_Home";
import Purchase_page from "./pages/Director/Purchase_page/Purchase_page";

import Director_Home from "./pages/Director/Director_Home/Director_Home";
import Profile from "./pages/Writer/Profile/Profile";
import Contact from "./pages/Director/Contact_details/Contact";

import AnalyticsW from './pages/Writer/Analytics/analytics';
import NotFount from "./notFount";
import { useEffect } from "react";

function App() {

  const {token,UserType} = useSelector((state)=>state.auth)

  const navigate = useNavigate();
  
  useEffect(() => {
    if (token === null) {
      navigate("/");
    } else if (UserType === "Director") {
      navigate("/Director_Home");
    }
    else if (UserType === "Script") {
      navigate("/WriterHome");
    }
  }, [token]);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Reg />} />
        <Route path="/Login" element={<Login />} />
       {token &&
        <Route path="/WriterHome" element={<Writer_Home/>} />
      }
      {token &&
        <Route path="/Director_Home" element={<Director_Home />} />
      } 
        <Route path="/publish" element={<Publish />} />
        <Route path="/update-pass" element={<Update_pass />} />
        <Route path="/my-script" element={<My_script />} />
        <Route path="/analytics" element={<AnalyticsW />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFount/>} />
        <Route path="/purchase" element={<Purchase_page />} />
        <Route path="/contact_details" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;

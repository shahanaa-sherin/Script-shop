import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer'
import Home_G from '../../Components/Home_G/Home_G'
import Navbar from '../../Components/Navbar/Navbar'

function Landingpage() {

  const navigate=useNavigate();
  const {UserType }=useSelector((state)=>state.auth)

  useEffect(()=>{
    if(UserType === 'Writer'){
      navigate('/WriterHome')
    }else if(UserType === 'Director'){
      navigate('/Director_Home')
    }
   },[UserType])

  return (
    <div>
        <Navbar/>
        <Home_G/>
        <Footer/>

    </div>
  )
}

export default Landingpage
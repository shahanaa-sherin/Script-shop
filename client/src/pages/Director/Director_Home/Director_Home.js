import './Director_Home.css';
import React, { useEffect } from 'react'
import products from './product.json'
import {Card, Grid} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import { DirectorScript, viewScript } from '../../../Redux/Slices/ScriptDirector';


function Director_Home() {

  const {Scriptlist} =useSelector(state=>state.dScript.ScriptList)
  const navigate=useNavigate();
  const dispatch =useDispatch();
  
  const auth = useSelector((state)=>state.auth)


  useEffect(() => {

    dispatch(DirectorScript());

    if(auth.UserType === "Writer"){
      navigate('/WriterHome')
    }else if(auth.UserType === "Director"){
      navigate('/Director_Home')
    }else if(auth.token === null){
      navigate('/')
    }
  }, [auth.UserType,navigate])

  const handleClick = (product) =>{
    dispatch(viewScript(product));
    navigate('/purchase')
  }
  return (
    <>
    <Navbar/>
      <Grid container justifyContent={"center"}>
         <Grid
          item
          className="first-G-WH"
          display={"grid"}
          justifyItems={"center"}
          alignItems={"center"}
        >
      <p className="first-G-para-WH">
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
        <Grid item
         letterSpacing={"10.3"}
        lg={"9.4"}
         md={"10.6"}
         sm={"9.2"}
         xs={"7.6"}
         >
        <p className='director_Hd'>Choose Your Dream Script</p>
        </Grid>
        <Grid 
        item 
        md={12} 
        className="main_card" 
        justifyContent={"center"}
        >
          {Scriptlist?.map((product,key) =>(
           <Card className='dir_card'>
          <p className='home_name'>{product.Moviename}</p>
          <button className='alex_btn'>By Alex</button>
          <button onClick={()=>handleClick(product)} className='purchase'>Purcharse</button>
        </Card>
      )  )}
        </Grid>
        </Grid>
        <Footer/>
    </>
  )
}

export default Director_Home


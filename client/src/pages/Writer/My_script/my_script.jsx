import React from 'react'
import './my_script.css'
import {Card,  Grid} from '@mui/material'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import { useSelector } from 'react-redux'
function My_script() {

  const {Scriptlist} =useSelector(state=>state.script.ScriptList)

  return (
    <>
    <Navbar/>
        <p className='hdscript'>Your Scripts</p>
      <Grid container paddingBottom={'60px'}>
        <Grid 
         item 
         md={12} 
         className="main_card" 
         justifyContent={"center"}
        >
          {
            !Scriptlist && 
             <div className='no-script'>
              <h1 className='no-script-h1'>Your not Published any Script</h1>
             </div> 
          }
          {Scriptlist?.map((item,key) =>(
           <Card className='matrixcard'>
          <p className='matrixname'>{item.Moviename}</p>
          <button className='scriptbtn'>Edit Script Detais</button>
        </Card>
      )  )}
        </Grid>
        </Grid>
        <Footer/>
    </>
  )
}

export default My_script

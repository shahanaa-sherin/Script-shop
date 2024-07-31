import { Grid } from '@mui/material'
import React from 'react'
import products from './product.json'
import './Purchase_Page.css';
import purchase_img1 from '../../../Assets/purchase_page/purchase_img1.png'
import purchase_img3 from '../../../Assets/purchase_page/purchase_img3.png'
import { useSelector } from 'react-redux';
import PayButton from '../../../notFount';

function Purchase_page() {

  const {viewScript}= useSelector(state=>state.dScript)
  return (
    <>
      <Grid container justifyContent={"center"} alignItems={'center'}>
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
        <Grid 
        item
        md={"4"}
        paddingBottom={"8%"}
        >
            <img src={purchase_img1} alt="" className="purchase_img1"/>
            <img src={purchase_img3} alt="" className="purchase_img3"/>
            <div  className='purchase-div'>
            <p className="purchase-div-hd">Purchase Your Script</p>
            <button className='follow' alt='follow' >Follow</button>
            <p className='contacts'>Contact Details</p>
    <Grid 
        item 
        md={12} 
        paddingTop={"10%"}
        justifyContent={"center"}
        >
          {viewScript?.map((product,key) =>(
          <div className='info-div'>
          <p className='info'>Script Writer :{product.Useremail}</p>
          <p className='info'>Movie Name :{product.Moviename}</p>
          <p className='info'>Synopsis :{product.Synopsis}</p>
          <p className='info'>Genre :{product.Genre}</p>
          <p className='info'>Script Type :{product.ScriptType}</p>
        </div>
      )  )}
        </Grid>
        <PayButton ViewScript={viewScript[0]} />
            {/* <button type='submit' alt='pay' className='paybtn'>pay</button> */}
            <button type='button' alt='pay' className='Dwnbtn'>Download Script</button>

            </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Purchase_page

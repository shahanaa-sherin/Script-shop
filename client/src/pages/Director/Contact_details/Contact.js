import React from 'react'
import { Grid } from '@mui/material'
import products from './product.json'
import './Contact.css'
import contactsimg_0 from '../../../Assets/contacts_details/contacts_img_0.png'
import contactsimg_1 from '../../../Assets/contacts_details/contacts_img_1.png'
import contactsimg_2 from '../../../Assets/contacts_details/contacts_img_2.png'
import contactsimg_3 from '../../../Assets/contacts_details/contacts_img_3.png'
function Contact() {
  return (
    <div>
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
        <img src={contactsimg_0} alt='img'className='contactsimg' />
        <img src={contactsimg_1} alt='img'className='contactsimg1' />
        <img src={contactsimg_2} alt='img'className='contactsimg2' />
        <img src={contactsimg_3} alt='img'className='contactsimg3' />
        <Grid 
        item
        md={"4"}
        paddingBottom={"8%"}
        >
        <div className='contacts-div'>
        <p className="contacts-div-hd">Contact Details</p>
            {products?.map((product,key) =>(
               <div className='info-contacts-div' >
              <p className='info'>{product.info_0}</p>  
              <p className='info'>{product.info_1}</p>
              <p className='info'>{product.info_2}</p> 
              </div>
            ))}
             </div>
        </Grid>
        </Grid>
    </div>
  )
}

export default Contact

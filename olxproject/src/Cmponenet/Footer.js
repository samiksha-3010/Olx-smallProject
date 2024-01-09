import React from 'react'
import "./Style.css/Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
      <div className='footer-first' >
    <div className='footer'>
      <div className='first'>
            <b>POPULAR LOCATIONS</b><br/>
            <p> Bhubaneshwar <br/>Hyderabad<br/>Chandigarh<br/>Nashik</p>
      </div>
      <div className='second'><b>TRENDING LOCATIONS</b><br/>
   <p>Kolkata<br/>Mumbai<br/>Chennai<br/>Pune</p>

      
      </div>
      <div className='third'><b>ABOUT US</b>
      <p>Contact Us</p>
      </div>
      <div className='fourth'><b>OLX</b>
      
      <p>  Help <br/>Sitemap<br/>Legal & Privacy information<br/>Vulnerability Disclosure Program
</p>
</div>
      <div className='five'><b>FOLLOW US</b>

    <div className='classification'>
    <div><FaFacebook /></div>
      <div><FaTwitter /></div>
      <div><FaYoutube /></div>
      <div><FaInstagramSquare /></div>
      </div>
      <div className='google-store'>
            <img src='https://pluspng.com/img-png/play-store-logo-png-google-play-logo-google-play-app-store-android-google-play-free-910x528.png'/> 
      </div>
    </div>

    </div>
<div className='last-content'>
      <div className='context'>
            <p>Help - Sitemap</p>
            <p>All rights reserved © 2006-2024 OLX</p>


      </div>

</div>
    </div>





    



    
  )
}

export default Footer
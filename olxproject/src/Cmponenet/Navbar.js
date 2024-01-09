
import { useContext } from "react";
import AuthContext from "./Context/AuthContext";
import "./Style.css/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>// import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
  const {state, dispatch} = useContext(AuthContext);
  const router = useNavigate()
  // document.getElementById('openPopupBtn').addEventListener('click', function() {
  //   document.getElementById('popup').style.display = 'flex'
  // });
  // document.getElementById('closePopupBtn').addEventListener('click', function() {
  //   document.getElementById('popup').style.display = 'none'
  // });
  return (
    <div>

<header className='header'>
       <div className='logo'>
         <img src='https://logopng.com.br/logos/olx-104.png'/>
       </div>
       <div className='input-box'>
         <img src='https://cdn-icons-png.flaticon.com/512/54/54481.png' alt='image' />
         <input type='text' placeholder='india'/>

         <div class="dropdown">
  <div class="dropbtn"><img src='https://www.svgrepo.com/show/257654/down-arrow.svg'  style={{ width:"20px",paddingLeft:"10%"}}/>
</div>
  <div class="dropdown-content">
    <a href="#">RECENT LOCATIONS</a>
 
    <a href="#">POPULAR LOCATIONS</a>
    <a href="#">Option 3</a>
  </div>
</div>

 
       


       </div>
       <div className='inputbox'>
         <input type='text' placeholder='Search Here...'/>
        <div className='search-box'>
  <img src='https://purepng.com/public/uploads/medium/search-icon-sl7.png'   style={{ width:"20px", marginLeft:"10px", marginTop:"10px", marginRight:"30px"}}/>

  {/* {state?.user?.name ? <>

    < onClick={() => dispatch({ type: "LOGOUT" })}>Logout</p>
           </>: <p onClick={() => router('/login')}>Login/Register</p>} */}

         </div>
       </div>

 
       <div class="dropdown">
  <div class="dropbtn ">ENGLISH</div>
  <div class="dropdown-content">
    <a href="#">ENGLISH  </a>
    <a href="#">HINDI</a>
  </div>
</div>

      {/* <div class="dropdown">
  <button class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false " style={{border:"none",marginLeft:"30px",outline:"0"}}>
   ENGLISH
   </button>
   <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">ENGLISH</a></li>
     <li><a class="dropdown-item" href="#">Another action</a></li>
   </ul>
 </div> */}
  {state?.user?.name? <> 



  <p onClick={() => router('/profile')}>{state.user.name}  </p>
            <p onClick={() => dispatch({ type: "LOGOUT" })}>Logout</p>
            </>:  <div  onClick={() => router('/login')} className='login' style={{ color:"black",textDecoration:"none",marginLeft:"20px",  }} id='logo-two'   ><u>Login </u></div>}
 <div className='sell'><b>  +  Sell  </b>
 </div>

{/* <button id="openPopupBtn">Login</button>

<div id="popup" class="popup">
  <div class="popup-content">
    <span class="close" id="closePopupBtn"> djkasldjasldk;</span>
    <p>This is a full-page popup!</p>
  </div>
</div> */}
     </header>
     <div className="sacond-nav">
      <div className="cate"><b>ALL  CATEGORIES</b>
      
      

                 <img src='https://www.svgrepo.com/show/257654/down-arrow.svg'  style={{ width:"20px", marginLeft:"20%"}}/>

      </div>
      <p></p>
      <p>Cars</p>
      <p>Motorcycles</p>

 <p>     Mobile Phones</p>
<p>For Sale: Houses & Apartments
</p>
<p>Scooters</p>
<p>,pF.Commercial & Other</p>
 <p>Vehicles</p>
<p>or Rent: Houses & Apartments
</p>
     </div>

     <div className="second-header">

     </div>
     <h4 style={{ marginRight:"60%"}}>Fresh recommendations</h4>
  {/* <h2  style={{ marginRight:"60%"}}>Buy & Sell Used Cars in Mumbai Central</h2> */}

<div className="product">
  <div> <img src="https://apollo.olx.in/v1/files/rhv10drraap62-IN/image;s=300x600;q=60"/>
<div className="imahe-div-lower">
<b style={{marginRight:"20%"}}>₹ 14,64,100</b><br/>
<span>Kia Seltos GTK, 2020,Diesel</span><br/>
<p style={{color:"green"}}>2020 - 50000.0 km <br/><span  style={ {color:"green",fontSize:"12px", marginBottom:"10%"}}>MUMBAI CENTRAL, MUMBAI</span></p>
<p style={ {color:"green",fontSize:"12px", marginBottom:"10%"}}>     
</p> 
</div>
  </div>
  <div> <img src="https://apollo.olx.in/v1/files/e3zi98w6vblr3-IN/image;s=300x600;q=60"/>
<div className="imahe-div-lower">
<b style={{marginRight:"20%"}}>₹ 78,00,000</b><br/>
<span>  Ford Mustang V8, 2017, Petrol</span><br/>
<p style={{color:"green"}}>2017 - 45,000 km <br/><span  style={ {color:"green",fontSize:"12px", marginBottom:"10%"}}>WORLI CENTRAL, MUMBAI</span></p>
<p style={ {color:"green",fontSize:"12px", marginBottom:"10%"}}>     
</p> 
</div>
  </div>



  <div> <img src="https://apollo.olx.in/v1/files/89v05cq78jib2-IN/image;s=300x600;q=60"/>
<div className="imahe-div-lower">
<b style={{marginRight:"20%"}}>₹ 78,00,000</b><br/>
<span>  Ford Mustang V8, 2017, Petrol</span><br/>
<p style={{color:"green"}}>2017 - 45,000 km <br/><span  style={ {color:"green",fontSize:"12px", marginBottom:"10%"}}>WORLI CENTRAL, MUMBAI</span></p>
<p style={ {color:"green",fontSize:"12px", marginBottom:"10%"}}>     
</p> 
</div>
  </div> 
  
  <div> <img src="https://apollo.olx.in/v1/files/xw0nv7kvrwrb2-IN/image;s=300x600;q=60"/>
<div className="imahe-div-lower">
<b style={{marginRight:"20%"}}>₹ 78,00,000</b><br/>
<span>  Ford Mustang V8, 2017, Petrol</span><br/>
<p style={{color:"green"}}>2017 - 45,000 km <br/><span  style={ {color:"green",fontSize:"12px", marginBottom:"10%"}}>WORLI CENTRAL, MUMBAI</span></p>
<p style={ {color:"green",fontSize:"12px", marginBottom:"10%"}}>     
</p> 
</div>
  </div>

  <div> <img src="https://apollo.olx.in/v1/files/gn8oulfr1j3y2-IN/image;s=300x600;q=60"/>
<div className="imahe-div-lower">
<b style={{marginRight:"20%"}}>₹ 78,00,000</b><br/>
<span>  Ford Mustang V8, 2017, Petrol</span><br/>
<p style={{color:"green"}}>2017 - 45,000 km <br/><span  style={ {color:"green",fontSize:"12px", marginBottom:"10%"}}>WORLI CENTRAL, MUMBAI</span></p>
<p style={ {color:"green",fontSize:"12px", marginBottom:"10%"}}>     
</p> 
</div>
  </div>

  <div> <img src="https://apollo.olx.in/v1/files/t1b7eare1j0y-IN/image;s=300x600;q=60"/>
<div className="imahe-div-lower">
<b style={{marginRight:"20%"}}>₹ 78,00,000</b><br/>
<span>  Ford Mustang V8, 2017, Petrol</span><br/>
<p style={{color:"green"}}>2017 - 45,000 km <br/><span  style={ {color:"green",fontSize:"12px", marginBottom:"10%"}}>WORLI CENTRAL, MUMBAI</span></p>
<p style={ {color:"green",fontSize:"12px", marginBottom:"10%"}}>     
</p> 
</div>
  </div>
  
  <div> <img src="https://apollo.olx.in/v1/files/wm3v6dnvhuxv2-IN/image;s=300x600;q=60"/>
<div className="imahe-div-lower">
<b style={{marginRight:"20%"}}>₹ 78,00,000</b><br/>
<span>  Ford Mustang V8, 2017, Petrol</span><br/>
<p style={{color:"green"}}>2017 - 45,000 km <br/><span  style={ {color:"green",fontSize:"12px", marginBottom:"10%"}}>WORLI CENTRAL, MUMBAI</span></p>
<p style={ {color:"green",fontSize:"12px", marginBottom:"10%"}}>     
</p> 
</div>
  </div>
  
  
  <div> <img src="https://apollo.olx.in/v1/files/ari0ih2ieu981-IN/image;s=300x600;q=60"/>

<div className="imahe-div-lower">
<b style={{marginRight:"20%"}}>₹ 1,42,000
</b><br/>
<span>    Hyundai Aura, 2023</span><br/>
<p style={{color:"green"}}>2023 - 7.0 km
 <br/><span  style={ {color:"green",fontSize:"12px", marginBottom:"10%"}}>BYCULLA, MUMBAI</span></p>
<p style={ {color:"green",fontSize:"12px", marginBottom:"10%"}}>     
</p> 
</div>
  </div> 

  



  
  </div>
  {/* <div className="button">

  <button>Learn More</button>

  <div className="image">


  </div>


  </div> */}
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
 <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>



    </div>
  )
}

export default Navbar


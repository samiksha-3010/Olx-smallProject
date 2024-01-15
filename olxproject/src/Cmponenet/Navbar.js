
import { useContext } from "react";
import AuthContext from "./Context/AuthContext";
import "./Style.css/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>// import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
  const {state, dispatch} = useContext(AuthContext);
  const router = useNavigate()

  return (  // document.getElementById('openPopupBtn').addEventListener('click', function() {
  //   document.getElementById('popup').style.display = 'flex'
  // });
  // document.getElementById('closePopupBtn').addEventListener('click', function() {
  //   document.getElementById('popup').style.display = 'none'
  // });
    <div>

<header className='header'>
       <div className='logo'>
         <img  onClick={() => router('/')} src='https://logopng.com.br/logos/olx-104.png'/>
       </div>
       <div className='input-box'>
         <img src='https://cdn-icons-png.flaticon.com/512/54/54481.png' alt='image' />
         <input type='text' placeholder='india'/>

         <div class="dropdown">
         <div class="dropbtn"><img src='https://www.svgrepo.com/show/257654/down-arrow.svg'  style={{ width:"20px",paddingLeft:"10%"}}/></div>

        {/* <button class="dropbtn">Dropdown</button> */}
        <div class="dropdown-content">
            <a href="#option1">  <IoLocationOutline />Mumbai West</a>
        
            <a href="#option2">  <IoLocationOutline />Andehari East </a>
            <a href="#option3">  <IoLocationOutline /> Andehri West</a>
            <a href="#option2">   <IoLocationOutline />Govandi </a>
            <a href="#option3">  <IoLocationOutline /> Chembur</a>

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

      <p onClick={() => router('/add-product')}>Product +</p>
       <p  onClick={() => router('/your-product')} >Your Product</p>
       

 
       <div class="dropdown">
  <div class="dropbtn ">ENGLISH</div>
  <div class="dropdown-content">
    <a href="#">ENGLISH  </a>
    <a href="#">HINDI</a>
  </div>
</div>






{/* {state?.user?.role == "Seller" &&<h4 onClick={() => router('/add-product')}>Add Product</h4>}
{state?.user?.role == "Buyer" && <h4 onClick={() => router('/your-product')}>YourProduct</h4>} */}



  {state?.user?.name? <> 

  <p onClick={() => router('/profile')}>  </p>
            <p onClick={() => dispatch({ type: "LOGOUT" })}    style={{ marginTop:"10px" }}>Logout</p>
            </>:  <div  onClick={() => router('/login')} className='login' style={{ color:"black",textDecoration:"none",marginLeft:"20px",  }} id='logo-two'   ><u >Login</u></div>}
 <div className='sell'><b>  +  Sell  </b>
 </div>
{/*  
 {state?.user?.role == "Seller" &&<h4 onClick={() => router('/add-product')}>Add Product</h4>}
 {state?.user?.role == "Seller" &&<h4 onClick={() => router('/add-product')}>Add Product</h4>} */}



 


     </header>


 
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
 <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>



    </div>
  )
}

export default Navbar


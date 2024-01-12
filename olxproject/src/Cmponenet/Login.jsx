
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import './Style.css/Login.css'
import { useNavigate } from 'react-router-dom';
import AuthContext from "./Context/AuthContext";
import axios from "axios";


const Login = () => {

  const [userData, setUserData] = useState({ email: "", password: "" })

    const { state, dispatch } = useContext(AuthContext)
    const router = useNavigate()

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            const response = await axios.post("http://localhost:8000/login", { userData });
            if (response.data.success) {
                dispatch({
                    type: 'LOGIN',
                    payload: response.data.user
                })
                localStorage.setItem("token", JSON.stringify(response.data.token))
                setUserData({ email: "", password: "" })
                router('/')
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }
        } else {
            toast.error("All fields are mandtory.")
        }
    }
    // console.log(userData, "userData")

    useEffect(() => {
        if (state?.user?.name) {
            router('/')
        }
    }, [state])


  return (
    <div id="logscreen">
      <div id="logbody">
     <div className="top-level">
      <img src="https://www.speedtest.pl/wiadomosci/wp-content/uploads/2020/05/OLX-logo-696x392.jpg"/>


     </div>
       
        <div>
          <p>Log In to view your profile</p>
        </div>
        <div id="logform">
          <form
          onSubmit={handleSubmit}
          >
            <label>Enter your Email ID :</label>
            <br />
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            <br />
            <label>Enter your Password :</label>
            <br />
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
            <br />
            <button>LOGIN</button>
          </form>
        </div>
        <div>
      <span  style={{paddingTop:"20px",color:"red", paddingRight:"15%"}}>Do not have an Account? <span onClick={()=>router('/register')}>Register</span>
</span>
      </div>
      
      <div className="adjust-div">
        <p  >All your personal details are safe with us</p>
        <span>      If you continue, you are accepting OLX Terms </span>
        <span>and </span>
        <span>Conditions and Privacy Policy</span>
      </div>

    </div>
        
      </div>
      
  );
};

export default Login;

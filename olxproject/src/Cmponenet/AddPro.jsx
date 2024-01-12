import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const AddPro = () => {

      const router = useNavigate();
      const [pProdName, setpProdName] = useState("")
      const [pDecription, setpDecription] = useState("")
      const [pPrice, setpPrice] = useState("")
      const [pCategories, setpCategories] = useState("")
      const [pimage, setpimage] = useState("")


      // const [userData, setUserData] = useState({ ProdName: "", Decription: "", Price: "",  Categories:"",  Proimage :""})
      // const handleChange = (event) => {
      //       setUserData({ ...userData, [event.target.name]: event.target.value })
      //   }


      useEffect(()=>{
            if(!localStorage.getItem("token")){
                  // router("./login")

            }
      },[])
      const handleApi = ()=>{

            const formData = new FormData()
            formData.append("pProdName",pProdName)
            formData.append("pDecription",pDecription)
            formData.append("pPrice",pPrice)
            formData.append("pCategories",pCategories)
            formData.append("pimage",pimage)


            const url = "http://localhost:8000/add-pro ";
            axios.post(url,formData)
            .then((res)=>{
              console.log(res)

            })
            .catch((err)=>{
                  console.log(err)
            })
      }
  return (
    <div>
      <div className='p-3'>
      <h2>Product my</h2>
      <label>ProdName</label><br/>
      <input className='from-control' type='text'  value={pProdName}  

      // name='text'
      //     onChange={handleChange}

      onChange={(event)=>{setpProdName(event.target.name)}}
      
      /><br/>

<label>Decription</label><br/>
      <input className='from-control' type='text' value={pDecription} 
       onChange={(event)=>{setpDecription(event.target.name)}}
      /><br/>
            <label>Price</label><br/>
      <input className='from-control' type='text' value={pPrice}
             onChange={(event)=>{setpPrice(event.target.name)}}
      /><br/>

      <label>  Categories</label><br/>
      <select className='from-control' value={pCategories} 
      onChange={(event)=>{setpCategories(event.target.name)}}>
            <option>Bike</option>
            <option>Mobile</option>
            <option>Cloth</option>
            <option>Car</option>

      </select><br/>
      <label> Proimage</label><br/>
      <input className='from-control' type='file' 
             onChange={(event)=>{
                  // console.log(event.target.files[0])

                  setpimage(event.target.files[0])
                  
                }}
      /><br/>


                <button   onClick={handleApi} className='btn'>Submit</button>
      </div> 

      




    </div>
  )
}

export default AddPro
// import axios from 'axios';
// import React, { useState } from 'react'
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'

// const AddPro = () => {

//       const router = useNavigate();
//       const [pProdName, setpProdName] = useState("")
//       const [pDecription, setpDecription] = useState("")
//       const [pPrice, setpPrice] = useState("")
//       const [pCategories, setpCategories] = useState("")
//       const [pimage, setpimage] = useState("")
//       const [product,setproduct] = useState([])


//       // const [userData, setUserData] = useState({ ProdName: "", Decription: "", Price: "",  Categories:"",  Proimage :""})
//       // const handleChange = (event) => {
//       //       setUserData({ ...userData, [event.target.name]: event.target.value })
//       //   }
      
//       useEffect(()=>{
//             if(!localStorage.getItem("token")){
//                   // router("./login")
//             }
//       },[])


//       useEffect(()=>{
//             const url = "http://localhost:8000/get-pro ";
//             axios.get(url)
//             .then((res)=>{
//                   console.log(res)
//                   if(res.data.product){
//                         setproduct(res.data.products)
//                   }

//             })
//             .then((err)=>{
//                   console.log(err)
//                   alert("server.error")
//             })
          

//       },[])
//       const handleApi = ()=>{

//             const formData = new FormData()
//             formData.append("pProdName",pProdName)
//             formData.append("pDecription",pDecription)
//             formData.append("pPrice",pPrice)
//             formData.append("pCategories",pCategories)
//             formData.append("pimage",pimage)


//             const url = "http://localhost:8000/add-pro ";
//             axios.post(url,formData)
//             .then((res)=>{
//               console.log(res)

//             })
//             .catch((err)=>{
//                   console.log(err)
//             })
//       }
//   return (
//     <div>
//       <div className='p-3'>
//       <h2>Product my</h2>
//       <label>ProdName</label><br/>
//       <input className='from-control' type='text'  value={pProdName}  

//       // name='text'
//       //     onChange={handleChange}

//       onChange={(event)=>{setpProdName(event.target.name)}}
      
//       /><br/>

// <label>Decription</label><br/>
//       <input className='from-control' type='text' value={pDecription} 
//        onChange={(event)=>{setpDecription(event.target.name)}}
//       /><br/>
//             <label>Price</label><br/>
//       <input className='from-control' type='text' value={pPrice}
//              onChange={(event)=>{setpPrice(event.target.name)}}
//       /><br/>

//       <label>  Categories</label><br/>
//       <select className='from-control' value={pCategories} 
//       onChange={(event)=>{setpCategories(event.target.name)}}>
//             <option>Bike</option>
//             <option>Mobile</option>
//             <option>Cloth</option>
//             <option>Car</option>

//       </select><br/>
//       <label> Proimage</label><br/>
//       <input className='from-control' type='file' 
//              onChange={(event)=>{
//                   // console.log(event.target.files[0])

//                   setpimage(event.target.files[0])
                  
//                 }}
//       /><br/>


//                 <button   onClick={handleApi} className='btn'>Submit</button>
//       </div> 

      




//     </div>
//   )
// }

// export default AddPro




import axios from 'axios'
import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import AuthContext from './Context/AuthContext';


const AddPro = () => {
    const [productData, setProductData] = useState({ name: "", price: "", image: "", category: "" })

    const { state } = useContext(AuthContext)
    const router = useNavigate()

    const handleChange = (event) => {
        setProductData({ ...productData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (productData.name && productData.price && productData.image && productData.category) {
            const token = JSON.parse(localStorage.getItem("token"))
            try {
                  const response = await axios.post("http://localhost:8000/add-product", {  token,
                  productData, });                if (response.data.success) {
                    setProductData({ name: "", price: "", image: "", category: "" })
                    router('/')
                    toast.success(response.data.message)
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }
        } else {
            toast.error("All fields are mandtory.")
        }
    }
    console.log(productData, "productData")

    return (
  
           <div>
             <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input style={{width:"30%" , height:"60px"}} type='text' onChange={handleChange} name='name' value={productData.name} /><br />
                <label>Price</label><br />
                <input  style={{width:"30%" , height:"60px"}} type='number' onChange={handleChange} name='price' value={productData.price} /><br />
                <label>Image</label><br />
                <input   style={{width:"30%" , height:"60px"}}type='text' onChange={handleChange} name='image' value={productData.image} /><br />
                <label>Category</label><br />
                <input style={{width:"30%" , height:"60px"}} type='text' onChange={handleChange} name='category' value={productData.category} /><br />
                <input  style={{width:"20%" , height:"60px",backgroundColor:"black",color:"white",marginTop:"10px" ,marginLeft:"50px",borderRadius:"30px"}} type='submit' value='Add Product' /><br />
            </form>
            {/* <button onClick={() => router('/your-products')}>All Products</button> */}
           </div>
       
    )
}


export default AddPro

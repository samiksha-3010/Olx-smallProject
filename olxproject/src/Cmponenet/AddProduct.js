
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Style.css/AddProduct.css"
// import { v4 as uuidv4 } from 'uuid';
import AuthContext from './Context/AuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';


const AddProduct = () => {

  const [productData, setProductData] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
  });

  const { state } = useContext(AuthContext);
  const router = useNavigate();

  const handleChange = (event) => {
    setProductData({ ...productData, [event.target.name]: event.target.value });
  };

  function selectRole(event){
            // console.log(event.target.value, "-category")
            setProductData({...productData,["category"]:event.target.value})
           }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      productData.name &&
      productData.price &&
      productData.image &&
      productData.category
    ) {
      const token = JSON.parse(localStorage.getItem("token"));
      try {
        const response = await axios.post("http://localhost:8000/add-product", {  token,
           productData, });
        // const response = await api.post("/add-product", {
        //   token,
        //   productData,
        // });
        if (response.data.success) {
          setProductData({ name: "", price: "", image: "", category: "" });
          router("/all-product");
          toast.success(response.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("All fields are mandtory.");
    }
  };
  console.log(productData, "productData")
    
  return (
    <div>
    <div id='addone'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          {/* <legend>Fill your Details</legend> */}
          <label>Product Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
          />
          <br />
          
          <label>Product Price :</label>
          <br />
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
          />
          <br />
          <label>Product cetegory :</label><br />
                <select 
                onChange={selectRole} >
                    <option value="Other">Other</option>
                    <option value="Mens">Mens</option>
                    <option value="Womens">Womens</option>
                    <option value="Kids">Kids</option>
                    <option value="Electronics">Electronics</option>
                </select><br />

                
          <label>Product Image :</label>
          <br />
          <input
            type="text"
            name="image"
            value={productData.image}
            onChange={handleChange}
          />
          <br />

          <button value="Add Product">Add Product</button>
        </fieldset>
      </form>
    </div>
    </div>
  )
}

export default AddProduct



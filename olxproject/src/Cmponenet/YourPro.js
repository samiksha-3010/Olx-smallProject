import axios from "axios";
import "./Style.css/YourPro.css"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";


const YourPro = () => {
      const router = useNavigate();
  const [allProducts, setAllProducts] = useState();
  useEffect(() => {
    async function getProducts() {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        const response = await axios.post("http://localhost:8000/getYour-Product", {  token });     
           if (response.data.success) {
          setAllProducts(response.data.products);
        }
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
    getProducts();
  }, []);
  return (

      <div className="screen">
      <div className="main">
        
            {/* <div className="left">left */}
            <div id="allleft">
         <div>
           <p>All Products</p>
           <p>Showing 81-100 out of 10000 products</p>
         </div>
         <div id="allside">
           <div>
             <span>Sort by:</span>
             <span>
               <select>
                 <option>Relevance</option>
                 <option>Price:High to Low</option>
                 <option>Price:Low to High</option>
                 <option>Discounts</option>
               </select>
             </span>
           </div>
           <div>
             <div>
               <h4>FILTERS</h4>
               <p>1000+ products</p>
             </div>
             <div>
               <select>
                 <option>Categories</option>
                 <option>T-Shirt</option>
                 
               </select>
             </div>
             <div>
               <select>
                 <option>Gender</option>
                 <option>Men</option>
                 
               </select>
             </div>
             <div>
               <select>
                 <option>Fabric</option>
                 <option>Acrylic</option>
                 
               </select>
             </div>
             <div>
               <select>
                 <option>Color</option>
                 <option>Black</option>
                 
               </select>
             </div>
             <div>
               <select>
                 <option>Price</option>
                 <option>Under Rs. 149</option>
                 
               </select>
             </div>
             <div>
               <select>
                 <option>Meesho Mall</option>
                 <option>Mall Brands</option>
                 
               </select>
             </div>
             <div>
               <select>
                 <option>Discount</option>
                 <option>10% and above</option>
                 
               </select>
             </div>
             <div>
               <select>
                 <option>Rating</option>
                 <option>2.0 and above</option>
                 
               </select>
             </div>
             <div>
               <select>
                 <option>size</option>
                 <option>s</option>
                 
               </select>
             </div>
             <div>
               <select>
                 <option>Combo</option>
                 <option>Combos</option>
                 
               </select>
             </div>
             <div>
               <select>
                 <option>Print or Pattern Type</option>
                 <option>Abstract</option>
                 
               </select>
             </div>
             <div>
               <select>
                 <option>Ornamentation</option>
                 <option>Applique</option>
                 
               </select>
             </div>
             <div>
               <select>
                 <option>Bottom Pattern</option>
                 <option>Floral</option>
                 
               </select>
             </div>
             <div>
               <select>
                 <option>Surface Styling</option>
                 <option>Applique</option>
                 
               </select>
             </div>
             <div>
               <select>
                 <option>fit/ Shape</option>
                 <option>A-line</option>
                 
               </select>
             </div>
             <div>
               <select>
                 <option>Top Type</option>
                 <option>Tshirt</option>
                 
               </select>
             </div>
             <div>
               <select>
                 <option>Warranty Period</option>
                 <option>1 Month</option>
                 
               </select>
             </div>
             <div>
               <select>
                 <option>Waist Rise</option>
                 <option>Waist Rise</option>
                 
               </select>
             </div>
             <div>
               <select>
                 <option>Bottom type</option>
                 <option>Shorts</option>
                 
               </select>
             </div>
             <div>
               <select>
                 <option>Type</option>
                 <option>Basic</option>
                 
               </select>
             </div>
           </div>
         </div>
       {/* </div> */}
            
            
            
            </div>
            <div className="right"> right

    <div className="product-style">
      {/* <h1>Your Products Here ...</h1> */}

      {allProducts?.length ? (
        <div style={{ display: "flex", justifyContent: "space-around" ,flexWrap:"wrap"  }}>
          {" "}
          {allProducts.map((product) => (
  <div onClick={() => router(`/singleproduct/${product._id}`)}
  key={product._id}              style={{
      border: "2px solid black",
      width: "210px",
      height: "350px",
    }}>  
              {/* key={product._id} */}
            {/* > */}
              <img
                style={{ width: "100%", height: "70%"}}
                src={product.image}
              />
              <span>Name : {product.name}</span>
              <span>Price : {product.price}</span>
              <span>onwards</span>

              <div>
             <span>
               <p>3.4</p>
               <i class="fa-solid fa-star fa-xs"></i>
             </span>
             <p>27 Reviews</p>
           </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No Products found!</div>
      )}
    </div>
    </div>
    </div>
    </div>

  
  );
};

export default YourPro;
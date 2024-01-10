import ProductModal from "../Modal/ProductModal.js";
import jwt from "jsonwebtoken";


export const addProduct = async (req, res) => {
      try {
          const { name, price, image, category } = req.body;
          const{token} = req.body
          if (!name || !price || !image || !category || !token) return res.status(404).json({success: false, message: "All fields are mandtory.." })
  
          const decodedData = jwt.verify(token, process.env.JWT_SECRET);
          
  
          if (!decodedData) {
              return res.status(404).json({success: false,  message: "Token not valid." })
          }
  
          const userId = decodedData.userId;
  
          const product = new ProductModal({ name, price, image, category, userId: userId });
          await product.save();
  
          return res.status(201).json({success: true, message: "Product Created Successfully."  })
  
      } catch (error) {
          return res.status(500).json({ success: false, message :error.message })
      }
  }
  
  export const allProducts = async (req, res) => {
      try {
            const products = await ProductModal.find({});
            // const products = await ProductModal.find({isBlocked:false,isVerified:"true"});
            if (products.length) {
              return res.status(200).json({ success: true, products: products });
            }
            return res
              .status(404)
              .json({ success: false, message: "No products found!" });
          } catch (error) {
            return res.status(500).json({ success: false, error: error.message });
          }
  }

  export const getSingleProductData = async (req, res) => {
      try {
            const { productId } = req.body;
            if (!productId) return res.status(404).json({ success: false, message: "Product id is mandtory.." })
      
            const product = await ProductModal.findById(productId);
            if (product) {
                return res.status(200).json({ success: true, product })
            }
            return res.status(404).json({ success: false, error: "Products details not found." })
      
        } catch (error) {
            return res.status(500).json({ success: false, error: error.message })
        }
  }
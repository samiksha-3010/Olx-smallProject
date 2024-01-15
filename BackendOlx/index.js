



// const multer  = require('multer')
// const path = require("path")
// const uploads = multer({ dest: 'uploads/' })
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   })
//   const upload = multer({ storage: storage })
//   app.use("./uploads",express.static(path.join(_dirname,"upload")))

// app.get("./get-product",(req,res)=>{
//   Products.find()
//   .then((result)=>{
//     console.log(result,"userData")
//     res.send({message:"succec",products:""})
   
//   })
//   .catch((err)=>{
//     ({message:"server err"})
//   })
// })
//   app.post('/uploads', upload.single('file'), (req, res) => {
//     // Handle the uploaded file here
//     res.send('File uploaded successfully!');
//   });
  

// **********************
import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from "cors"
import { Login, Register, getCurrentUser } from './Controoler/UserControoler.js';
import { addProduct, allProducts, getSingleProductData, getYourProducts } from './Controoler/ProductControoler.js';
import { checkSeller } from './Modal/Meedlware/AllMeedlewere.js';


const app = express();
app.use(express.json())
dotenv.config();
app.use(cors())

app.get("/", (req, res) => {
    res.send("Working...")
})

app.post("/register", Register)
app.post("/login", Login)
app.post("/get-current-user",getCurrentUser )
app.post('/add-product' ,checkSeller,addProduct)
app.get('/all-products ',checkSeller,allProducts )
app.post('/getSingle-ProductData',checkSeller,getSingleProductData  )
app.post('/getYour-Product',checkSeller,getYourProducts )



mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to DB...")
})

app.listen(8000, () => {
  console.log("Listening on port 8000")
})


// *****************

// app.post('/add-pro', upload.single('pimage'),(req,res) => {
// console.log(req.body)
// console.log(req.file.path)
// const pProdName = req.body.pProdName
// const pDecription = req.body.pDecription
// const pPrice = req.body.pPrice
// const pCategories = req.body.pCategories
// const pimage = req.file.fath


// const Products = new  product({pProdName,pimage, pDecription,pDecription,pPrice,pCategories})
// product.save()
// .then(()=>{
//   res.send({message:"Save Succes"})
// })
// .catch(()=>{
//   res.send({message:"server err"})
// })



// return
// })

// const Products = mongoose.model('product',{pProdName:String,pDecription:String,pPrice:String,pCategories:String,pimage:String})

// *******************





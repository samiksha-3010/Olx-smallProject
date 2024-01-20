import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Cmponenet/Home';
import Navbar from './Cmponenet/Navbar';
import Register from './Cmponenet/Register';
import Login from './Cmponenet/Login';
import Footer from './Cmponenet/Footer';
import AddProduct from './Cmponenet/AddProduct';
import AddPro from './Cmponenet/AddPro';
import AllProduct from './Cmponenet/AllProduct';
import YourPro from './Cmponenet/YourPro';
import SingleProduct from './Cmponenet/SingleProduct';


function App() {
  return (
    <div className="App">
              <Navbar/>

      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='Register' element={<Register/>}/>
      <Route exact path='login' element={<Login/>}/>
      <Route exact path='add-product' element={<AddProduct/>}/>
      <Route exact path='your-product' element={<YourPro/>}/>
      <Route exact path='/singleproduct/:id' element={SingleProduct}/>
      {/* <Route exact path='add-pro' element={<AddPro/>}/> */}
      <Route exact path='all-product' element={<AllProduct/>}/>
      </Routes>
      <Footer/>
    
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Cmponenet/Home';
import Navbar from './Cmponenet/Navbar';
import Register from './Cmponenet/Register';
import Login from './Cmponenet/Login';
import Footer from './Cmponenet/Footer';


function App() {
  return (
    <div className="App">
              <Navbar/>

      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='Register' element={<Register/>}/>
      <Route exact path='login' element={<Login/>}/>
      {/* <Route exact path='footer' element={<Footer/>}/> */}

      </Routes>
      <Footer/>
    
    </div>
  );
}

export default App;

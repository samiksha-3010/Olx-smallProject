import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Cmponenet/Register';
import Home from './Cmponenet/Home';
import Login from './Cmponenet/Login';
import Navbar from './Cmponenet/Navbar';

function App() {
  return (
    <div className="App">
              <Navbar/>

      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='Register' element={<Register/>}/>
      <Route exact path='login' element={<Login/>}/>
      </Routes>
    
    </div>
  );
}

export default App;

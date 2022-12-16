import './App.css';
import {Route, Routes } from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';
import { useDispatch } from 'react-redux';
import { userCurrent } from './JS/userSlice/userSlice';
import { useEffect, useState } from 'react';
import Profil from './component/Profil';
import PrivateRoute from './PrivetRoute/PrivateRoute';
import Navv from './component/Navv';
import HomePage from './component/HomePage';
import Footer from './component/Footer';
import { productget } from './JS/productSlice';
import Dashbord from './component/Dashbord';
import { orderget } from './JS/orderSlice';
import Product from './component/Product';


function App() {
  const isAuth=localStorage.getItem("token");
  const dispatch=useDispatch();
  const [ping, setping] = useState(false)
  useEffect(() => {
   
    dispatch(userCurrent());
    dispatch(productget());
    dispatch(orderget());


  
  }, [ping])
  
  return (
    <div className="App" >
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<Product ping={ping} setping={setping}/>} /> 
      <Route exact path="/register" element={<Register ping={ping} setping={setping}/>}/>
      <Route path="/login" element={<Login ping={ping} setping={setping}/>}/>
      <Route path="/profile"  element={<Profil ping={ping} setping={setping}/>}/>
      <Route path="/dashbord" element={<Dashbord ping={ping} setping={setping}/>} />
    {/*   <PrivateRoute path="/profil">
        <Profil/>
      </PrivateRoute> */}
    </Routes>
    </div>
  );
}

export default App;

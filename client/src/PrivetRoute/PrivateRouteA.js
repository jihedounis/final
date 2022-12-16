import React from 'react'
import { Navigate, Redirect, Route, useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux'



 const PrivateRouteA = ({component:Component, ...rest}) => {
   const navigate=useNavigate();
    const isAuth = localStorage.getItem("token");
    const user= useSelector(state => state.userReducer.user)
    if (isAuth){
    if(user){ if(user.isAdmin){
          return <Route component={Component}{...rest}/>

      }}
     
    }return navigate("/");

 }

export default PrivateRouteA


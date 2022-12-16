import React from 'react'
import { Route, useNavigate } from "react-router-dom";


const PrivateRouteP = ({component:Component, ...rest}) => {
    const navigate=useNavigate();
    const isAuth = localStorage.getItem("token");
    if(isAuth){
        return <Route component={Component}{...rest}/>;

    }
    else return navigate("/");

};
export default PrivateRouteP
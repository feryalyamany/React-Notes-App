import React from 'react'
import Login from './Login/Login'
import Home from './Home/Home';




function ProtectedRoute({saveUserData}) {
  

    if(localStorage.getItem("token") != null){
        return <Home/>
    }else{
        return <Login/> 
    }
}

export default ProtectedRoute

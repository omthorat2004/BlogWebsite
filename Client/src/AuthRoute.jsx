import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { tokenSelector } from './features/Authentication/authenticationSlice';
const AuthRoute = () => {
  const token = useSelector(tokenSelector)
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  useEffect(()=>{
    if(token){
    navigate('/')
    }
  },[location.pathname])
  return (
    <>
        <Outlet/>
    </>
  );
}

export default AuthRoute;

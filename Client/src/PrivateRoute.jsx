import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { tokenSelector, userValidSelector, userVerification } from './features/Authentication/authenticationSlice';
const PrivateRoute = () => {
    const token = useSelector(tokenSelector)
    const userValid = useSelector(userValidSelector)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!token){
            //dispatch(displayMessage(navigate))
            navigate('/login')
        }else if(token && userValid){
            console.log("Hello")
            dispatch(userVerification(token))
        }else{
            // dispatch(displayMessage(navigate))
            navigate('/login')
        }
    },[token,userValid,navigate,dispatch])

  return (
    <>
        <Outlet/>
    </>
  );
}

export default PrivateRoute;

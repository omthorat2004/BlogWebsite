import { Box, Button, Stack } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AuthBrandLogo from '../../../Components/AuthBrandLogo';
import { ButtonLoading } from '../../../Components/Loading';
import { currentUserSelector, errorSelector, loadingSelector, messageSelector, sendEmailVerification, setErrorFalse, setInitialState, setSuccessFalse, successSelector, verificationEmail } from '../authenticationSlice';
import AuthResponse from './AuthResponse';
import { StyledTextField } from './Login';
import { authBoxStyle, authStackStyle, authSubmitButton, borderBoxStyle } from './style';
const EmailVerify = () => {
    const [code,setCode] = useState('')
    const navigate = useNavigate()
    const [isFirstTime,setIsFirstTime]=useState(true)
    const dispatch = useDispatch()
    const user = useSelector(currentUserSelector)
    const loading = useSelector(loadingSelector)
    const success = useSelector(successSelector)
    const error = useSelector(errorSelector)
    const message = useSelector(messageSelector)
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const email =useMemo(()=>searchParams.get('email'),[location])
    console.log(email)
    const sendOtp = ()=>{
        if(!code){
            Swal.fire({
                title:'OTP required',
                icon:'error'
            })
            return;
        }
        dispatch(sendEmailVerification({email:email,name:user.name}))
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(verificationEmail({email,code:code}))
    }
    useEffect(()=>{
        if(success){
            navigate('/')
            dispatch(setSuccessFalse())
        }
        if(error){
            setIsFirstTime(false)
            dispatch(setErrorFalse())
        }
        if(error&&message=='Email is verified'){
            Swal.fire({
                title:message,
                icon:'success'
            })
            navigate('/')
            dispatch(setInitialState())
        }
    },[error,success])
    if(!email){
        return <h1>Page is not found</h1>
    }
  return (
    <Stack sx={{...authStackStyle}} >
        <form onSubmit={handleSubmit} style={borderBoxStyle}>
            <AuthBrandLogo/>
            <Box sx={{...authBoxStyle}}>
                <StyledTextField type='text' name='otp' label='Enter Otp' onChange={(e)=>setCode(e.target.value)}  value={code} required/>
                <Button variant='contained' type='submit' size='large' sx={authSubmitButton}>{loading?<ButtonLoading/>:'Verify email'}</Button>
                <Box display='flex' justifyContent='flex-end' >
                    <Button size='small' sx={{display:isFirstTime?'none':'flex'}} onClick={sendOtp} type='button'>{loading?<ButtonLoading/>:'Resend Otp'}</Button>
                </Box>
            </Box>
        </form>
        {error?<AuthResponse text={message} error={true} />:null}
    </Stack>
  );
}

export default EmailVerify;

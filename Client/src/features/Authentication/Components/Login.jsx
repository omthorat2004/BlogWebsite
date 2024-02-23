import styled from '@emotion/styled';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthBrandLogo from '../../../Components/AuthBrandLogo';
import { ButtonLoading } from '../../../Components/Loading';
import { handleLoginError } from '../../../utils';
import { errorSelector, loadingSelector, loginUser, messageSelector, setSuccessFalse, successSelector, tokenSelector } from '../authenticationSlice';
import AuthResponse from './AuthResponse';
import { authBoxStyle, authCenterBox, authLinkStyle, authStackStyle, authSubmitButton } from './style';

export const StyledTextField = styled(TextField)({
    maxWidth:'100%'
})
const defaultValue = {
    email:'',
    password:''
}
const Login = () => {
  const [formData,setFormData] = useState(defaultValue)
  const error = useSelector(errorSelector)
  const loading = useSelector(loadingSelector)
  const message = useSelector(messageSelector)
  const success = useSelector(successSelector)
  const token = useSelector(tokenSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange = (e)=>{
        setFormData((prev)=>({
          ...prev,
          [e.target.name]:e.target.value
        }))
  }
  const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(loginUser(formData))
  }
  useEffect(()=>{
      handleLoginError(error,message,dispatch,toast,formData.email)
      setFormData(defaultValue)
  },[error,dispatch])
  useEffect(()=>{
    if(success){
      navigate('/')
      dispatch(setSuccessFalse())
    }
    
  },[success])
  return (
    <Stack sx={authStackStyle}>
      <form onSubmit={handleSubmit}>
        <Box sx={{...authBoxStyle,opacity:error?0.5:1}}>
            <AuthBrandLogo/>
            <StyledTextField  name='email' type='email' label='Email' helperText='Please enter gmail' onChange={handleChange} value={formData.email} required/>
            <StyledTextField name='password' type='password' label='Password' helperText='Please enter password' onChange={handleChange} value={formData.password} required/>
            <Box display='flex' mt={-1} mb={1} justifyContent='flex-end'>
              <Typography color='primary' sx={authLinkStyle}>Forgot Password ?</Typography>
            </Box>
            <Button  type='submit' disabled={loading?true:false} variant='contained' sx={authSubmitButton}>{loading?<ButtonLoading/>:'Login'}</Button>
        </Box>
      </form>  
      <Box sx={authCenterBox}>
          <Typography color='primary' component={Link} to='/sign'  sx={authLinkStyle}>
              Don't Have an account?
          </Typography>
      </Box>
      <ToastContainer autoClose={4000}/>
      {error?<AuthResponse text={message}/>:null}
    </Stack>
  );
}

export default Login;

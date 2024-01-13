import styled from '@emotion/styled';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthBrandLogo from '../../../Components/AuthBrandLogo';
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
        
  }
  return (
    <Stack sx={authStackStyle}>
      <form>
        <Box sx={authBoxStyle}>
            <AuthBrandLogo/>
            <StyledTextField  name='email' type='email' label='Email' helperText='Please enter gmail' onChange={handleChange} required/>
            <StyledTextField name='password' type='password' label='Password' helperText='Please enter password' onChange={handleChange} required/>
            <Box display='flex' mt={-1} mb={1} justifyContent='flex-end'>
              <Typography color='primary' sx={authLinkStyle}>Forgot Password ?</Typography>
            </Box>
            <Button  type='submit' variant='contained' sx={authSubmitButton}>Login</Button>
        </Box>
      </form>  
      <Box sx={authCenterBox}>
          <Typography color='primary' component={Link} to='/sign'  sx={authLinkStyle}>
              Don't Have an account?
          </Typography>
      </Box>
      <AuthResponse text='Incorrect email or password'/>
    </Stack>
  );
}

export default Login;

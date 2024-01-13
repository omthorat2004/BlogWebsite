import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthBrandLogo from '../../../Components/AuthBrandLogo';
import { StyledTextField } from './Login';
import { authBoxStyle, authCenterBox, authLinkStyle, authStackStyle, authSubmitButton } from './style';
const defaultValue = {
    email:'',
    name:'',
    password:''
}
const Sign = () => {
    const [formData,setFormData] = useState()
    const [photoUpload,setPhotoUpload] = useState()
    const handleChange = (e)=>{
        setFormData((prev)=>({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
  const handleChangePhoto = (e)=>{
    setPhotoUpload(e.target.files[0])

  }
  return (
    <Stack sx={authStackStyle}>
        <form>
            <Box sx={authBoxStyle} >
                <AuthBrandLogo/>
                <StyledTextField label='Enter Your Name' name='name' type='text' helperText='Please Enter Your Name:'/>
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    multiple
                    type="file"
                    />  
                <label style={{width:'100%'}} htmlFor="raised-button-file">
                    <Button  variant='outlined' sx={{width:'100%',height:'50px',my:1}} component="span" >
                        Upload a Photo
                    </Button>
                </label> 
                <StyledTextField label='Enter your email' sx={{mt:1}} name='email' type='email' helperText='Please enter your email' />
                <StyledTextField label='Enter Your Password' name='password' type='email' sx={{my:2}} helperText='Please enter your password'/>
                <Button type='submit' variant='contained' sx={authSubmitButton}>Sign Up</Button>
                <Box sx={authCenterBox} >
                    <Typography color='primary' component={Link} to='/login'  sx={authLinkStyle}>
                        Already Have an Account?
                    </Typography>
                </Box>
                {/* <AuthResponse text='User already exists'/> */}
            </Box>
        </form>
    </Stack>
  );
}
export default Sign;

import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { v4 } from 'uuid';
import AuthBrandLogo from '../../../Components/AuthBrandLogo';
import ButtonLoading from '../../../Components/Loading/ButtonLoading';
import { showSignAlert } from '../../../utils';
import { loadingSelector as authLoadingSelector, errorSelector, messageSelector, sendEmailVerification, setSuccessFalse, signUser, successSelector } from '../authenticationSlice';
import { useImageUpload } from '../hooks/useImageUpload';
import AuthResponse from './AuthResponse';
import { StyledTextField } from './Login';
import { authBoxStyle, authCenterBox, authLinkStyle, authStackStyle, authSubmitButton } from './style';
const defaultValue = {
    email:'',
    name:'',
    password:''
}
const Sign = () => {
    const error = useSelector(errorSelector)
    const message = useSelector(messageSelector)
    const success = useSelector(successSelector)
    const loading = useSelector(authLoadingSelector)
    const dispatch = useDispatch()
    const [imageLoading,setLoading] = useState(false)
    const [formData,setFormData] = useState(defaultValue)
    const [photoUpload,setPhotoUpload] = useState()
    const [uuid,setUuid] = useState('')
    const {getLink} = useImageUpload()


    const handleChange = (e)=>{
        setFormData((prev)=>({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const handleFileChange = (e)=>{
        setPhotoUpload(e.target.files[0])
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        setLoading(true)
        console.log(formData)
        const photoUrl = await getLink(photoUpload,uuid)
        dispatch(signUser({...formData,photoUrl:photoUrl,uuid:uuid}))
        setLoading(false)
    }
   useEffect(()=>{
    if(error){
    showSignAlert(error,message,dispatch)
    }
   },[error,message,dispatch])
   useEffect(()=>{
    if(success){
        const {name,email} = formData
        dispatch(sendEmailVerification({name,email}))
        toast.success(`Email is sent to email ${formData.email} please check your email this screen is going to close`,{
            position:'top-right'
        })
        dispatch(setSuccessFalse())
        setTimeout(()=>{
            window.close()
        },200)
    }
   },[success])
   useEffect(()=>{
        setUuid(v4())
   },[])
  return (
    <Stack  sx={{...authStackStyle}}  >
        <form onSubmit={handleSubmit}>
            <Box sx={{...authBoxStyle,opacity:error?0.5:1}}  >
                <AuthBrandLogo/>
                <StyledTextField label='Enter Your Name' name='name' type='text' helperText='Please Enter Your Name:' required onChange={handleChange}/>
                <input
                onChange={handleFileChange}
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    multiple
                    type="file"
                    required
                    />  
                <label style={{width:'100%'}} htmlFor="raised-button-file">
                    <Button  variant='outlined' sx={{width:'100%',height:'50px',my:1}} component="span" >
                        Upload a Photo
                    </Button>
                    <p>{photoUpload?.name}</p>
                </label> 
                <StyledTextField label='Enter your email' sx={{mt:1}} name='email' type='email' helperText='Please enter your email' required onChange={handleChange} />
                <StyledTextField label='Enter Your Password' name='password' type='password' sx={{my:2}} helperText='Please enter your password' required onChange={handleChange}/>
                <Button disabled={loading||imageLoading?true:false}   type='button' onClick={handleSubmit} variant='contained' sx={authSubmitButton}>{loading||imageLoading?<ButtonLoading/>:'Sign Up'}</Button>
                <Box sx={authCenterBox} >
                    <Typography color='primary' component={Link} to='/login'  sx={authLinkStyle}>
                        Already Have an Account?
                    </Typography>
                </Box>
         
            </Box>
            {error||success?<AuthResponse error={error}  text={message}/>:null }
        </form>
        <ToastContainer  autoClose={3000}/>
    </Stack>
  );
}
export default Sign;

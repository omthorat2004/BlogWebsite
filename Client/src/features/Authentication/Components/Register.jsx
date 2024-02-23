import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Button, Stack, TextareaAutosize, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ButtonLoading } from '../../../Components/Loading';
import { showAuthAlert } from '../../../utils';
import { errorSelector as authErrorSelector, messageSelector as authMessageSelector, currentUserSelector, loadingSelector, registerUser, successSelector } from '../authenticationSlice';
import { useLinkValidate } from '../hooks/useLinkValidate';
import AboutTextField from './AboutTextField';
import AuthResponse from './AuthResponse';
import { authBoxStyle, authStackStyle, authSubmitButton } from './style';
const defaultLinks = {
  instagram:'',
  facebook:''
}
const Register = () => {
  const [aboutLinks,setAboutLinks] = useState(defaultLinks)
  const [about,setAbout] = useState('')
  const error = useSelector(authErrorSelector)
  const message = useSelector(authMessageSelector)
  const success = useSelector(successSelector)
  const user = useSelector(currentUserSelector)
  const loading = useSelector(loadingSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChangeLinks = (name,value)=>{
  setAboutLinks((prev)=>({
    ...prev,
    [name]:value
  }))
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    const valid = useLinkValidate(aboutLinks)
    if(!valid){
      return;
    }
    const registerData = {about:about,...aboutLinks,email:user.email}
    dispatch(registerUser(registerData))
  }
  useEffect(()=>{
    showAuthAlert(success,error,dispatch,navigate,'api/register')
    setAboutLinks(defaultLinks)
    setAbout('')
  },[error,success])
// console.log(aboutLinks)
  return (
    <Stack sx={authStackStyle}>
        <form onSubmit={handleSubmit}>
            <Box overflow='hidden' sx={authBoxStyle}>
                <Typography mb={3} color='primary' variant='h5' fontSize={30}>Just Give a Additional Info</Typography>
                <AboutTextField   name='instagram' label='Instagram Link' value={aboutLinks}  handleChangeLinks={handleChangeLinks} icon={<InstagramIcon color='primary'/>}/>
                <AboutTextField name='facebook' label='Facebook Link' value={aboutLinks}  handleChangeLinks={handleChangeLinks}  icon={<FacebookIcon color='primary'/>}/>
                <TextareaAutosize  minRows={7} maxLength={100} value={about} onChange={(e)=>{setAbout(e.target.value)}} required/>
                <Box display='flex' justifyContent='flex-end'>
                    <Typography color='primary' variant='body3'>Max 100 words are allowed</Typography>
                </Box>
                <Button sx={{...authSubmitButton,mt:{xs:1,md:2}}} disabled={loading?true:false}  type='submit' variant='outlined'>{loading?<ButtonLoading/>:'Submit'}</Button>
            </Box>
            {error?<AuthResponse text={message}/>:null}
        </form>
    </Stack>
  );
}

export default Register;

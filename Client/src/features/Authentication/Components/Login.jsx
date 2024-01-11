import styled from '@emotion/styled';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const StyledTextField = styled(TextField)({
    maxWidth:'100%'
})
const defaultValue = {
    email:'',
    password:''
}
const Login = () => {
  const [formData,setFormData] = useState(defaultValue)
  const handleChange = (e)=>{
        
  }
  return (
    <Stack minHeight='92vh' display='flex' justifyContent='center' alignItems='center'>
      <form>
        <Box width={400}  display='flex' flexDirection='column'>
            <Box mb={2} display='flex' justifyContent='center' alignItems='center'>
                <AlternateEmailIcon color='black' fontSize='large'/>
                <Typography sx={{"&:focus":{color:'black'},"&:hover":{color:'black'}}} component={Link} to='/' color='primary' variant='h5'>
                  BlogBoom
                </Typography>
            </Box>
            <StyledTextField  name='email' type='email' label='Email' helperText='Please enter gmail' onChange={handleChange} required/>
            <StyledTextField name='password' type='password' label='Password' helperText='Please enter password' onChange={handleChange} required/>
            <Box display='flex' my={1} justifyContent='flex-end'>
              <Typography color='primary'>Forgot Password ?</Typography>
            </Box>
            <Button  type='submit' variant='contained' sx={{mt:0,height:'40px'}}>Login</Button>
        </Box>
      </form>  
    </Stack>
  );
}

export default Login;

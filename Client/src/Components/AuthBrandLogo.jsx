import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
const AuthBrandLogo = () => {
  return (
    <Box mb={2} display='flex' justifyContent='center' alignItems='center'>
                <AlternateEmailIcon color='primary' sx={{fontSize:'40px',mr:1}}/>
                <Typography sx={{"&:focus":{color:'black'},"&:hover":{color:'black'}}} component={Link} to='/' color='primary' variant='h4'>
                    BlogBoom
                </Typography>
    </Box>
  )
}

export default AuthBrandLogo

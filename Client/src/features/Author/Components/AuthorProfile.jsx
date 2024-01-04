import styled from '@emotion/styled';
import { Avatar, Box, Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const StyledBox = styled(Box)(({theme})=>({
    display:'flex',
    textAlign:'initial',
    backgroundColor:'white',
    paddingLeft:theme.spacing(3),
    paddingRight:theme.spacing(3),
    
    [theme.breakpoints.up('md')]:{
      paddingRight:theme.spacing(5),
      paddingLeft:theme.spacing(5),
      fontSize:'16px'
    }
}))
const StyledText = styled(Typography)(({theme})=>({
  color:'primary',
  "&:hover":{
    color:'black'
  },
  fontSize:'12px',
  [theme.breakpoints.up('md')]:{
    fontSize:'16px'
  }
}))
const AuthorProfile = () => {
  const theme = useTheme()
  
  const buttonSize = useMediaQuery(theme.breakpoints.down('sm'))?'small':'large'
  
  return (
    <Stack direction='column' padding={{xs:'20px 30px',md:'30px 100px'}} minHeight='90vh' bgcolor='#F5F7F8'>
      <Box bgcolor='white' minHeight='80vh'>
        <Box display='flex' bgcolor='white'  padding={{xs:3,md:5}} borderRadius='15px 15px 0 0 ' justifyContent='flex-start' alignItems='center'>
            <Avatar src='https://wallpapercave.com/wp/wp12944056.jpg' sx={{height:{xs:'30px',md:'56px'},width:{xs:'30px',md:'56px'}}}/>
            <Typography sx={{fontSize:{xs:'15px',md:'20px'},margin:{xs:'0 10px',md:'0 20px'}}} fontWeight={700}>Om Thorat</Typography>
            <Button variant='contained' size={buttonSize}  sx={{marginLeft:'auto'}}>Follow</Button>
        </Box>
        <StyledBox bgcolor='white' textAlign='initial' display='flex' flexDirection='column' px={{xs:3,md:5}} >
            <Typography mb={2} variant='body3' fontSize={{xs:'13px',md:'16px'}}>
              Editor of Blitzkrieg Motivation    Editor of Blitzkrieg Motivation    Editor of Blitzkrieg Motivation    Editor of Blitzkrieg Motivation    Editor of Blitzkrieg Motivation   Editor of Blitzkrieg Motivation   Editor of Blitzkrieg Motivation v v
            </Typography>
            <Typography component={Link} color='primary' fontSize={{xs:'13px',md:'16px'}} to='mailto:omthorat1005@gmail.com'>
              omthorat1005@gmail.com
            </Typography>
        </StyledBox>
        <StyledBox gap={5} pt={2}>
          <StyledText component={Link} color='primary' >982 Followers</StyledText>
          <StyledText component={Link} color='primary' >16 Blogs</StyledText>
          <StyledText component={Link}  color='primary'>73 Following</StyledText>
        </StyledBox>
        </Box> 
    </Stack>
  );
}

export default AuthorProfile;

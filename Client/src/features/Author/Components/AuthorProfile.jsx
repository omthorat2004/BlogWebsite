import styled from '@emotion/styled';
import { Avatar, Box, Button, ButtonGroup, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthorBlogs from './AuthorBlogs';
import AuthorFollower from './AuthorFollower';
import AuthorFollowing from './AuthorFollowing';

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

const AuthorProfile = () => {
  const [selectedComponent,setSelectedComponent] = useState(<AuthorBlogs/>)
  const handleClick = (componentName)=>{
    switch (componentName){
      case 'component1':
        setSelectedComponent(<AuthorFollower/>)
        break;
      case 'component2':
        setSelectedComponent(<AuthorBlogs/>)
        break;
      case 'component3':
        setSelectedComponent(<AuthorFollowing/>)    
    }
  }
  const theme = useTheme()
  const size = useMediaQuery(theme.breakpoints.down('sm'))?'small':'large'
  
  return (
    <Stack direction='column' padding={{xs:'10px 10px',sm:'10px 30px',md:'30px 100px'}} minHeight='90vh' bgcolor='#F5F7F8' >
      <Box bgcolor='white' minHeight='80vh' borderRadius={7} boxShadow='0 0 10px lightgrey'>
        <Box display='flex' bgcolor='white'  padding={{xs:3,md:5}} borderRadius='15px 15px 0 0 ' justifyContent='flex-start' alignItems='center'>
            <Avatar src='https://wallpapercave.com/wp/wp12944056.jpg' sx={{height:{xs:'30px',md:'56px'},width:{xs:'30px',md:'56px'}}}/>
            <Typography sx={{fontSize:{xs:'15px',md:'25px'},margin:{xs:'0 10px',md:'0 20px'}}} fontWeight={700}>Om Thorat</Typography>
            <Button variant='contained' size={size}  sx={{marginLeft:'auto'}}>Follow</Button>
        </Box>
        <StyledBox bgcolor='white' textAlign='initial' display='flex' flexDirection='column' px={{xs:3,md:5}} >
            <Typography mb={2} variant='body3' fontSize={{xs:'13px',md:'16px'}}>
              Editor of Blitzkrieg Motivation    Editor of Blitzkrieg Motivation    Editor of Blitzkrieg Motivation    Editor of Blitzkrieg Motivation    Editor of Blitzkrieg Motivation   Editor of Blitzkrieg Motivation   Editor of Blitzkrieg Motivation v v
            </Typography>
            <Typography component={Link} color='primary' fontSize={{xs:'13px',md:'16px'}} to='mailto:omthorat1005@gmail.com'>
              omthorat1005@gmail.com
            </Typography>
        </StyledBox>
        <ButtonGroup size={size}  sx={{mt:2,mx:1}} >
          <Button onClick={()=>handleClick('component1')}>982 Followers</Button>
          <Button onClick={()=>handleClick('component2')}>16 Blogs</Button>
          <Button onClick={()=>handleClick('component3')}>73 Following</Button>
        </ButtonGroup>
        
        <Box>
          {selectedComponent}
        </Box>
        </Box> 
    </Stack>
  );
}

export default AuthorProfile;

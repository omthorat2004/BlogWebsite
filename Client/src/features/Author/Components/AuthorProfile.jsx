import styled from '@emotion/styled';
import { Avatar, Box, Button, ButtonGroup, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { avatarBoxStyle } from '../../UserProfile/Components/style';
import { authorsSelector } from '../authorSlice';
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
  let {id} = useParams()
  id=parseInt(id)
  const [currentAuthor,setCurrentAuthor] = useState(null)
  const authors = useSelector(authorsSelector)
  console.log(id)
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
  console.log(currentAuthor)
  console.log(authors)
  const theme = useTheme()
  const size = useMediaQuery(theme.breakpoints.down('sm'))?'small':'large'
  useEffect(()=>{
    const author = authors.find((obj)=>obj.id===id)
    console.log(author)
    console.log(typeof(id))
    setCurrentAuthor(author)
  },[authors])
  if(!currentAuthor){
    return <h2>User not found</h2>
  }
  return (
    <Stack direction='column' padding={{xs:'10px 10px',sm:'10px 30px',md:'30px 100px'}} minHeight='90vh' bgcolor='#F5F7F8' >
     
      {currentAuthor.id&&<Box bgcolor='white' minHeight='80vh' borderRadius={7} boxShadow='0 0 10px lightgrey'>
        <Box display='flex' bgcolor='white'  padding={{xs:3,md:5}} borderRadius='15px 15px 0 0 ' justifyContent='flex-start' alignItems='center'>
            <Box sx={avatarBoxStyle}>
              <Avatar src={currentAuthor.photoUrl} sx={{height:{xs:'35px',md:'65px'},width:{xs:'35px',md:'65px'}}}/>
            </Box>
            <Typography sx={{fontSize:{xs:'18px',md:'25px'},margin:{xs:'0 10px',md:'0 20px'}}} fontWeight={700}>{currentAuthor.name}</Typography>
            <Button variant='contained' size={size}  sx={{marginLeft:'auto'}}>Follow</Button>
        </Box>
        <StyledBox bgcolor='white' textAlign='initial' display='flex' flexDirection='column' px={{xs:3,md:5}} >
            <Typography mb={2} variant='body3' fontSize={{xs:'13px',md:'18px'}}>
              {currentAuthor.about}
            </Typography>
            <Box>
              <Typography component={Link} color='primary'   display='inline'  fontSize={{xs:'13px',md:'19px'}} to='mailto:omthorat1005@gmail.com'>
                {currentAuthor.email}
              </Typography>
            </Box>
        </StyledBox>
        <ButtonGroup size={size}  sx={{mt:2,mx:1}} >
          <Button onClick={()=>handleClick('component1')}>982 Followers</Button>
          <Button onClick={()=>handleClick('component2')}>16 Blogs</Button>
          <Button onClick={()=>handleClick('component3')}>73 Following</Button>
        </ButtonGroup>
        
        <Box  px={{xs:1,md:3}}>
          {selectedComponent}
        </Box>
        </Box> 
}
    </Stack>
  );
}

export default AuthorProfile;

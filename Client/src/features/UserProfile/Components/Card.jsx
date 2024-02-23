import styled from '@emotion/styled';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Avatar, Box, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { currentUserSelector } from '../../Authentication/authenticationSlice';
import { avatarBoxStyle } from './style';
const StyledTypography = styled(Typography)(({theme})=>({
    fontSize:'12px',
    [theme.breakpoints.up('md')]:{
      paddingLeft:'7px',
      paddingRight:'7px',
      borderRight:'solid 2px #ff0000',
      fontSize:'16px'
    }
}))
const ProfileCard = () => {
  const user = useSelector(currentUserSelector)
  console.log(user)
  return (
    <Card  sx={{flex:10,minWidth:'290px',mt:2,maxWidth:'500px',position:'relative',maxHeight:'280px',padding:'10px'}}  >
        <CardHeader sx={{position:'absolute',right:'0'}} action={<IconButton component={Link} to='/register' sx={{"&:focus":{outline:'none'}}}><ModeEditIcon /></IconButton>}/>
        <CardContent  sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:'20px',}}>
            <Box  sx={avatarBoxStyle}>
              <Avatar  src={user.photoUrl} sx={{height:{xs:'40px',md:'60px'},width:{xs:'40px',md:'60px'}}}/>  
            </Box>
            <Typography variant="body3" sx={{fontSize:{xs:'20px',md:'30px'},fontWeight:'600',my:'5px'}}  >{user.name}</Typography>
            <Typography level="body-sm" sx={{ opacity:0.8,fontSize:{xs:'13px',md:'17px'},fontWeight:'600' }}>
          {user?.about}
        </Typography>
        <Box display='flex' mt={2}>
          <StyledTypography>89 followers</StyledTypography>
          <StyledTypography>16 Blogs</StyledTypography>
          <Typography fontSize={{xs:'12px',md:'16px'}} paddingLeft='7px'>169 following</Typography>
        </Box>
        </CardContent>
        
    </Card>
  );
}

export default ProfileCard;

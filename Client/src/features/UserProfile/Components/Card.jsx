import styled from '@emotion/styled';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Avatar, Box, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import React from 'react';
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
  return (
    <Card  sx={{flex:10,minWidth:'290px',maxWidth:'500px',position:'relative',maxHeight:'280px',padding:'10px'}}  >
        <CardHeader sx={{position:'absolute',right:'0'}} action={<IconButton sx={{"&:focus":{outline:'none'}}}><ModeEditIcon/></IconButton>}/>
        <CardContent  sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:'20px',}}>
            <Box borderRadius='50%' padding='4px' sx={{backgroundImage:'linear-gradient(red, yellow)'}}>
              <Avatar  src='https://wallpapercave.com/wp/wp12944056.jpg' sx={{height:{xs:'40px',md:'60px'},width:{xs:'40px',md:'60px'}}}/>  
            </Box>
            <Typography variant="body3" sx={{fontSize:{xs:'20px',md:'30px'},fontWeight:'600',my:'5px'}}  >Om Thorat</Typography>
            <Typography level="body-sm" sx={{ opacity:0.8,fontSize:{xs:'13px',md:'17px'},fontWeight:'600' }}>
          Hello, this is my bio and I am a PRO member of MUI. I am a developer and I
          love to code.
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

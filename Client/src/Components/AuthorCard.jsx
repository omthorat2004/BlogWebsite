import LaunchIcon from '@mui/icons-material/Launch';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Avatar, Button, ButtonGroup, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
// import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
const AuthorCard = () => {
  return (
    <Card  sx={{flex:1,minWidth:'280px',maxWidth:'600px',padding:'30px'}}  >
        <CardContent  sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:'3px'}}>
            <Avatar src='https://wallpapercave.com/wp/wp12944056.jpg' sx={{ '--Avatar-size': '4rem'}}/>
            <Typography variant="body3" sx={{fontSize:'18px',fontWeight:'600'}}  >Om Thorat</Typography>
            <Typography level="body-sm" sx={{ maxWidth: '24ch',opacity:0.6,fontSize:'15px' }}>
          Hello, this is my bio and I am a PRO member of MUI. I am a developer and I
          love to code.
        </Typography>
        </CardContent>
        <CardContent>
        <CardActions buttonFlex="1" sx={{alignItems:'center',display:'flex',flexDirection:'column'}} >
          <ButtonGroup variant="contained" sx={{ bgcolor: 'background.surface' }}>
            <Button startIcon={<PersonAddIcon/>} sx={{"&:focus":{outline:'none'}}}>Follow</Button>
            <Button startIcon={<LaunchIcon/>} sx={{"&:focus":{outline:'none'}}}>Profile</Button>
          </ButtonGroup>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default AuthorCard;

import { Avatar, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
const ProfileCard = () => {
  return (
    <Card  sx={{flex:10,minWidth:'280px',maxWidth:'500px'}}  >
        <CardContent  sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:'3px'}}>
            <Avatar src='https://wallpapercave.com/wp/wp12944056.jpg' sx={{ '--Avatar-size': '4rem'}}/>
            <Typography variant="body3" sx={{fontSize:'18px',fontWeight:'600'}}  >Om Thorat</Typography>
            <Typography level="body-sm" sx={{ maxWidth: '24ch',opacity:0.8,fontSize:'15px',fontWeight:'600' }}>
          Hello, this is my bio and I am a PRO member of MUI. I am a developer and I
          love to code.
        </Typography>
        </CardContent>
        
    </Card>
  );
}

export default ProfileCard;

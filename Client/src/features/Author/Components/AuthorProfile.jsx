import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';

const AuthorProfile = () => {
  return (
    <Stack direction='column' padding={{xs:'20px 30px',md:'30px 100px'}} bgcolor='#F5F7F8'>
        <Box display='flex' bgcolor='white' padding={5} borderRadius={5} justifyContent='flex-start' alignItems='center'>
            <Avatar src='https://wallpapercave.com/wp/wp12944056.jpg' sx={{height:{xs:'25px',md:'56px'},width:{xs:'25px',md:'56px'}}}/>
            <Typography sx={{fontSize:{xs:'15px',md:'20px'},margin:{xs:'0 10px',md:'0 20px'}}}>Om Thorat</Typography>
            <Button variant='contained' sx={{marginLeft:'auto'}}>Follow</Button>
        </Box>
        <Box>
            
        </Box>
    </Stack>
  );
}

export default AuthorProfile;

import { Box, Stack } from '@mui/material';
import React from 'react';
import FollowingCard from './FollowingCard';
import Sidebar from './Sidebar';
const UserProfile = () => {
  return (
    <Stack direction={{xs:'column',md:'row'}} minHeight='90vh'  >
        <Sidebar/>
       <Box flex={10}>
        <FollowingCard/>
        <FollowingCard/>
        <FollowingCard/>
        </Box> 
    </Stack>
  );
}

export default UserProfile;

import { Box } from '@mui/material';
import React from 'react';
import FollowingCard from '../../UserProfile/Components/FollowingCard';
import { ComponentStyle } from './style';
const AuthorFollower = () => {
  return (
    <Box sx={ComponentStyle}>
      <FollowingCard/>
      <FollowingCard/>
      <FollowingCard/>
      <FollowingCard/>
      <FollowingCard/>
      <FollowingCard/>
    </Box>
  );
}

export default AuthorFollower;

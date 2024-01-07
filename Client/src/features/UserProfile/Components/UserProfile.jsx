import { Box, Stack } from '@mui/material';
import React from 'react';
import Sidebar from './Sidebar';
const UserProfile = ({children}) => {
  return (
    <Stack direction={{xs:'column',md:'row'}} minHeight='92vh'  >
        <Sidebar/>
        <Box flex={10} display='flex' justifyContent='center' flexWrap='wrap' padding={2}>
          {children}
        </Box>
    </Stack>
  );
}

export default UserProfile;

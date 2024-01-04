import { Stack } from '@mui/material';
import React from 'react';
import Blogs from './Blogs';
import Rightbar from './Rightbar';
const Home = () => {
  return (
    <Stack direction='row' px={{xs:1,sm:5}} pt={6} gap={2} bgcolor='#F5F7F8' sx={{minHeight:'90vh',boxSizing:'border-box'}} >
        <Blogs/>
        <Rightbar/>
    </Stack>
  );
}

export default Home;

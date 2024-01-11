import { Stack } from '@mui/material';
import React from 'react';
import AuthorCard from '../../../Components/AuthorCard';
import ExtraNavbar from './ExtraNavbar';
const Author = () => {
  return (
    <Stack display='flex' flexDirection='row' flexWrap='wrap'  gap={2} sx={{padding:'20px 18px',bgcolor:'#F5F7F8'}}>
        <ExtraNavbar/>
        <AuthorCard/>
        <AuthorCard/>
        <AuthorCard/>
        <AuthorCard/>
    
        <AuthorCard/>
        <AuthorCard/>
       
    </Stack>
  );
}

export default Author;

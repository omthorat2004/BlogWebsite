import { Box, Stack } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import CommonLoading from '../../../Components/Loading/CommonLoading';
import { loadingSelector } from '../authorSlice';
import AuthorList from './AuthorList';
import ExtraNavbar from './ExtraNavbar';
const Author = () => {
  const loading = useSelector(loadingSelector)
  return (
    <Stack display='flex'  alignContent='flex-start'  gap={2} sx={{padding:'20px 18px',bgcolor:'#F5F7F8',minHeight:'100vh'}}>
        <ExtraNavbar/>
        <Box>
         {loading ? <CommonLoading/>:null}
        </Box>
        <Box display='flex' gap={2} flexWrap='wrap' alignContent='flex-start' >
        <AuthorList/>
       
        </Box>
       
    </Stack>
  );
}

export default Author;

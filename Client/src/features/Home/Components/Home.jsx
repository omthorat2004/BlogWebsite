import { Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { currentUserSelector } from '../../Authentication/authenticationSlice';
import Blogs from './Blogs';
import Rightbar from './Rightbar';

const Home = () => {
  const user = useSelector(currentUserSelector)
  useEffect(()=>{
      if(user && user.id&&!user.about){
        toast('Please complete you register completely! ')
      }
  },[]) 
  return (
    <>
    <Stack direction='row' px={{xs:1,sm:5}} pt={6} gap={2} bgcolor='#F5F7F8' sx={{minHeight:'90vh',boxSizing:'border-box'}} >
        <Blogs/>
        <Rightbar/>
        <ToastContainer/>
    </Stack>
   
    </>
  );
}

export default Home;

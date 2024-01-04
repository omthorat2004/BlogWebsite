import { Box } from '@mui/material';
import React from 'react';
import BlogCard from '../../../Components/BlogCard';
const Blogs = () => {
  return (
    <Box flex={10} display='flex' flexDirection='column' sx={{backgroundColor:'#F5F7F8'}} rowGap={3}  >
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
    </Box>
  );
}

export default Blogs;

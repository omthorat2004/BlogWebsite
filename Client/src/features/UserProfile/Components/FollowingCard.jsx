
import styled from '@emotion/styled';
import LaunchIcon from '@mui/icons-material/Launch';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Avatar, Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
const StyledButton = styled(Button)(({theme})=>({
    color:'primary',
    "&:focus":{
        outline:'none'
    },
    margin:'0 5px 0',
    '& .MuiButton-startIcon': {
        fontSize: 'large', // Set icon size to large
      },
      // Media queries to change the size at different breakpoints
}))
const FollowingCard = () => {
    const theme = useTheme()
    const [clicked,setClicked] = useState(false)
    const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));
    const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    let buttonSize = 'small'; // Default button size
    if (matchesMd) {
      buttonSize = 'large'; // Change button size at medium breakpoints
    } else if (matchesSm) {
      buttonSize = 'medium'; // Change button size at small breakpoints
    }
    const handleClick = ()=>{
          setClicked(!clicked) 
    }
  return (
    <Box  display='flex' justifyContent='space-between' padding={3} boxShadow='0 0 5px lightgrey'  borderRadius={3} boxSizing='border-box'>
        <Box display='flex' alignItems='center' columnGap={2}>
            <Avatar sx={{width:{xs:'25px',md:'40px'},height:{xs:'25px',md:'40px'}}} src='https://wallpapercave.com/wp/wp12944056.jpg'/>
            <Typography variant='body3' fontSize={{xs:14,md:18}} fontWeight={500}>Om Thorat</Typography>
        </Box>
        
        <Box display='flex' alignItems='center' justifyContent='center' flexWrap='wrap' >
            <StyledButton variant='contained' size={buttonSize}   sx={{ '& .MuiButton-startIcon': { marginRight:{xs:0,md:1} } }}  onClick={handleClick}  startIcon={clicked? <PersonAddAltIcon/>:<PersonRemoveIcon  />}>{isSmallScreen?(''):clicked?"Follow":"Unfollow"}</StyledButton>
            <StyledButton variant='contained' size={buttonSize}   sx={{ '& .MuiButton-startIcon': { marginRight: {xs:0,md:1} } }}    startIcon={<LaunchIcon fontSize='small'/>}>{isSmallScreen?'':'Visit'}</StyledButton>
        </Box>
    </Box>
  );
}

export default FollowingCard;

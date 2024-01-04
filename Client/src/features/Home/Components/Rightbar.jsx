import styled from '@emotion/styled';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, Chip, Divider } from '@mui/material';
import React, { useState } from 'react';
const StyledBox = styled(Box)({
  display:'flex',
  flexWrap: 'wrap',
  alignContent:'flex-start',
  gap:'8px',
  margin:'30px 0 0',
  flexDirection:'row',
  padding:'18px'
})

const array=["Food","Travel","Education","Lifestyle","Business","Gaming","Sports"]
const Rightbar = () => {
  const [selectedIndex,setSelectedIndex] = useState(null)
  const handleClick = (e,index)=>{
   if(index!=selectedIndex){ 
    setSelectedIndex(index)
   }else{
    setSelectedIndex(null)
   } 
  }
  return (
    <Box flex={{md:3,sm:5}} display={{xs:'none',sm:'flex'}} position='sticky' maxHeight={800}  flexDirection='column' sx={{backgroundColor:'white',padding:3,boxSizing:'border-box',borderRadius:'20px',top:'20px'}} >
        <StyledBox >
          <Chip label='Recent'  clickable color='primary'sx={{fontSize:{lg:'17px',md:'15px',sm:'12px'}}} / >
          <Chip label='Top'  clickable color='primary' sx={{fontSize:{lg:'17px',md:'15px',sm:'12px'}}} />
        </StyledBox>
        <Divider/>
        <StyledBox>
          {
            array.map((title,index)=>{
              return  <Chip label={title} color='primary'  variant='outlined' clickable onClick={(e)=>{handleClick(e,index)}} size='large' icon={index===selectedIndex?<ClearIcon/>:''} sx={{fontSize:{lg:'17px',md:'15px'}}}/>
            })
          }
        </StyledBox>
    </Box>
  );
}

export default Rightbar;

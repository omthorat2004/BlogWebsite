import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Chip } from '@mui/material';
import React, { useState } from 'react';
const StyledChip = styled(Chip)({
    fontSize:'15px',
    marginLeft:2
})
const array=["Top","Food","Travel","Education","Lifestyle","Business","Gaming","Sports"]
const ExtraNavbar = () => {
    const [selectedIndex,setSelected]=useState()
    const handleClick = (e,index)=>{
        setSelected(index)
    }
  return (
    <Box flexBasis='100%' display='flex' columnGap={{xs:2,sm:5,md:7}} rowGap={2} justifyContent='center' flexWrap='wrap'> 
        {array.map((title,index)=><StyledChip variant='outlined' key={index} icon={index==selectedIndex?<CloseIcon fontSize='small'/>:null} color='primary' clickable  onClick={(e)=>handleClick(e,index)} label={title}/>)}
    </Box>
  );
}

export default ExtraNavbar;

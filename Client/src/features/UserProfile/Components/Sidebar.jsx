import styled from '@emotion/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StyledListButton = styled(ListItemButton)({
    "&:focus":{
        backgroundColor:"#0275d850"
    }
})
const array = ["Profile","Blogs","Like","Following","Bookmarks"]
const Sidebar = () => {

   const [currentIndex,setCurrentIndex] = useState(0)
   const navigate = useNavigate()
   const handleClick = (index)=>{
    setCurrentIndex(index)
    console.log(index)
    if(index==0){
        navigate('/profile')
    }else{
        navigate(`/profile/${array[index]}`)
    }
   }
  return (
   <Box flex={{xs:1,md:3}} position='sticky' top={0} maxHeight={780} border='solid black 1px' bgcolor='#F5F7F8'>
   <List sx={{display:{xs:'flex',md:'block'},flexWrap:'wrap',justifyContent:{xs:'center',sm:'center'},columnGap:'10px'}}>
   {array.map((ele,index)=>{
            const bgc = currentIndex==index?'#0275d850':''
            console.log(bgc)
            return (<ListItem   disablePadding   sx={{flex:{xs:0,sm:1},bgcolor:`${bgc}`,mt:'4px'}}>
            <ListItemButton onClick={()=>{handleClick(index)}} >
                <ListItemIcon >
                    <AccountCircleIcon color='primary'/>
                </ListItemIcon>
                <ListItemText sx={{color:'#0275d8'}}>
                    {ele}
                </ListItemText>
            </ListItemButton>
        </ListItem>)
        })}
   </List>
   </Box> 
  );
}

export default Sidebar;

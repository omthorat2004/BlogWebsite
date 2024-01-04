import AbcIcon from '@mui/icons-material/Abc';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GroupIcon from '@mui/icons-material/Group';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
const Sidebar = () => {
  return (
   <Box flex={{xs:1,md:3}} position='sticky' border='solid black 1px' bgcolor='#F5F7F8'>
   <List sx={{display:{xs:'flex',md:'block'},flexWrap:'wrap',justifyContent:{xs:'center',sm:'center'},columnGap:'10px'}}>
    <ListItem   disablePadding   sx={{flex:{xs:0,sm:1},bgcolor:'#0275d850',mt:'4px'}}>
        <ListItemButton>
            <ListItemIcon>
                <AccountCircleIcon color='primary'/>
            </ListItemIcon>
            <ListItemText sx={{color:'#0275d8'}}>
                Profile
            </ListItemText>
        </ListItemButton>
    </ListItem>
    <ListItem  disablePadding  sx={{flex:{xs:0,sm:1},mt:'4px'}} >
        <ListItemButton>
            <ListItemIcon>
            <AbcIcon color='primary'/>
            </ListItemIcon>
            <ListItemText sx={{color:'#0275d8'}}>
                Blogs
            </ListItemText>
        </ListItemButton>
    </ListItem>
    <ListItem disablePadding  sx={{flex:{xs:0,sm:1},mt:'4px'}} >
        <ListItemButton>
            <ListItemIcon>
                <FavoriteBorderIcon color='primary'/>
            </ListItemIcon>
            <ListItemText sx={{color:'#0275d8'}}>
                Like
            </ListItemText>
        </ListItemButton>
    </ListItem>
    <ListItem  disablePadding sx={{flex:{xs:0,sm:1},mt:'4px'}} >
        <ListItemButton>
            <ListItemIcon>
                <GroupIcon color='primary'/>
            </ListItemIcon>
            <ListItemText sx={{color:'#0275d8'}}>
                Following
            </ListItemText>
        </ListItemButton>
    </ListItem>
    <ListItem  disablePadding  sx={{flex:{xs:0,sm:0},mt:'4px'}}>
        <ListItemButton>
            <ListItemIcon>
                <BookmarkBorderIcon color='primary'/>
            </ListItemIcon>
            <ListItemText sx={{color:'#0275d8'}}>
                Bookmarks
            </ListItemText>
        </ListItemButton>
    </ListItem>
   </List>
   </Box> 
  );
}

export default Sidebar;

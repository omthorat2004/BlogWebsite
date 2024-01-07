import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';

const AuthorBlogs = () => {
  return (
    <List sx={{padding:'15px',mt:'15px'}}>
       <ListItem disablePadding  sx={{boxShadow:'0 0 8px lightgrey',borderRadius:'10px',mt:2}}>
          <ListItemButton >
            <ListItemAvatar>
                <Avatar variant='square' sx={{width:{xs:'100px',md:'200px'},height:{xs:'100px',md:'200px'},borderRadius:'10px'}} src='https://res.cloudinary.com/practicaldev/image/fetch/s--jWIGyvXL--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/55nbh4yadosc4mdtkfsh.png'/>
            </ListItemAvatar>
            <ListItemText sx={{marginLeft:'20px',maxWidth:'100%'}} primary='Shrimp and Chorizo Paella diuweuc bueiwbdewddjh cdhjcbhjdbc hdhcbbcewciuebncbn' primaryTypographyProps={{fontSize:{xs:'15px',md:'20px'},wordWrap:'break-word',overflow:'hidden'}}
             secondary='September 14, 2016'/>
          </ListItemButton>
       </ListItem>
       <ListItem disablePadding  sx={{boxShadow:'0 0 8px lightgrey',borderRadius:'10px',mt:2}}>
          <ListItemButton >
            <ListItemAvatar>
                <Avatar variant='square' sx={{width:{xs:'100px',md:'200px'},height:{xs:'100px',md:'200px'},borderRadius:'10px'}} src='https://res.cloudinary.com/practicaldev/image/fetch/s--jWIGyvXL--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/55nbh4yadosc4mdtkfsh.png'/>
            </ListItemAvatar>
            <ListItemText sx={{marginLeft:'20px'}} primary='Shrimp and Chorizo Paella diuweuc bueiwbdewddjh cdhjcbhjdbc hdhcbbcewciuebncbn' primaryTypographyProps={{fontSize:{xs:'15px',md:'20px'}}}
             secondary='September 14, 2016'/>
          </ListItemButton>
       </ListItem>
       <ListItem disablePadding  sx={{boxShadow:'0 0 8px lightgrey',borderRadius:'10px',mt:2}}>
          <ListItemButton >
            <ListItemAvatar>
                <Avatar variant='square' sx={{width:{xs:'100px',md:'200px'},height:{xs:'100px',md:'200px'},borderRadius:'10px'}} src='https://res.cloudinary.com/practicaldev/image/fetch/s--jWIGyvXL--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/55nbh4yadosc4mdtkfsh.png'/>
            </ListItemAvatar>
            <ListItemText sx={{marginLeft:'20px'}} primary='Shrimp and Chorizo Paella diuweuc bueiwbdewddjh cdhjcbhjdbc hdhcbbcewciuebncbn' primaryTypographyProps={{fontSize:{xs:'15px',md:'20px'}}}
             secondary='September 14, 2016' secondaryTypographyProps={{fontSize:{xs:'12px',md:"15px"}}}/>
          </ListItemButton>
       </ListItem>
       <ListItem disablePadding  sx={{boxShadow:'0 0 8px lightgrey',borderRadius:'10px',mt:2}}>
          <ListItemButton >
            <ListItemAvatar>
                <Avatar variant='square' sx={{width:{xs:'100px',md:'200px'},height:{xs:'100px',md:'200px'},borderRadius:'10px'}} src='https://res.cloudinary.com/practicaldev/image/fetch/s--jWIGyvXL--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/55nbh4yadosc4mdtkfsh.png'/>
            </ListItemAvatar>
            <ListItemText sx={{marginLeft:'20px'}} primary='Shrimp and Chorizo Paella diuweuc bueiwbdewddjh cdhjcbhjdbc hdhcbbcewciuebncbn' primaryTypographyProps={{fontSize:{xs:'15px',md:'20px'}}}
             secondary='September 14, 2016'/>
          </ListItemButton>
       </ListItem>
    
       
    </List>
  );
}

export default AuthorBlogs;

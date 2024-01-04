
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CreateIcon from '@mui/icons-material/Create';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PeopleIcon from '@mui/icons-material/People';
import { Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const array = ["Write","Authors"]
const Navbar = () => {
  const navigate = useNavigate()
  const [anchorElNav,setAnchorElNav] = useState(null)
  const [anchorElUser,setAnchorElUser] = useState(null)
  const handleOpenNavMenu = (event)=>{
    console.log(anchorElNav)
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = (event)=>{
    setAnchorElNav(null)
  }
  const handleOpenUserMenu = (event)=>{
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = ()=>{
    setAnchorElUser(null)
  }
  return (
      <AppBar position='static' >
        <Container   maxWidth='xl'>
          <Toolbar disableGutters >
            <Button variant='contained' onClick={()=>{navigate('/')}} sx={{"&:focus":{outline:'none'}}}>
            <AlternateEmailIcon fontSize='large' sx={{mr:2,display:{xs:'none',md:'flex',cursor:'pointer'}}} />
            <Typography   variant='h5'    sx={{display:{xs:'none',md:'flex'},"&:hover":{cursor:'pointer'}}}>
              BlogBoom
            </Typography>
            </Button>
            <Box sx={{display:{xs:'flex',md:'none'}}} flexGrow={1}>
              <IconButton sx={{"&:focus":{outline:'none'}}} onClick={handleOpenNavMenu} aria-haspopup="true"aria-controls='menu-appbar'   aria-label="account of current user" >
                <MenuOutlinedIcon fontSize='large' sx={{m:0,color:'#fff'}} /> 
              </IconButton>  
                <Menu 
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{vertical:'bottom',horizontal:'left'}}
                transformOrigin={{vertical:'bottom',horizontal:'left'}}
                keepMounted
                sx={{display:{xs:'block',md:'none'},mt:'45px',maxWidth:'370px'}}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                >
                  {
                    array.map((title)=>{
                      return <MenuItem sx={{width:'370px'}}  onClick={handleCloseNavMenu}>
                       <Typography  display='block'>{title}</Typography></MenuItem>
                    })
                  }
                </Menu>  
            </Box>
            <Box sx={{display:{xs:'none',md:'flex'},ml:3}} flexGrow={1}>
              
               
                  <Button  color='inherit' size='large'startIcon={<CreateIcon/>} sx={{mr:2,"&:focus":{outline:'none'}}}>Write</Button>
                  <Button  color='inherit' size='large'  onClick={()=>{navigate('/authors')}} startIcon={<PeopleIcon/>} sx={{mr:2,"&:focus":{outline:'none'}}}>Authors</Button>
            </Box>
            <AlternateEmailIcon sx={{display:{xs:'flex',md:'none'},mr:1}}/>
            <Typography flexGrow={1} sx={{display:{xs:'flex',md:'none'}}} variant='h6'>
              BlogBloom
            </Typography>
            <Box>
              <IconButton onClick={handleOpenUserMenu} sx={{"&:focus":{outline:'none'}}}>
                <Avatar src='https://wallpapercave.com/wp/wp12944056.jpg' />
                </IconButton>  
                 <Menu
                 id='menu-appbar'
                 anchorEl={anchorElUser}
                 anchorOrigin={{vertical:"top",horizontal:"right"}}
                 transformOrigin={{vertical:'top',horizontal:'right'}}
                 open= {Boolean(anchorElUser)}
                 onClose={handleCloseUserMenu}
                 sx={{mt:5}}
                 >
                    <MenuItem><Button sx={{"&:focus":{outline:'none',backgroundColor:'none'},"&:hover":{backgroundColor:'none'}}}  startIcon={<AccountBoxIcon/>}>Profile</Button></MenuItem>
                    <MenuItem><Button sx={{"&:focus":{outline:'none'}}} startIcon={<ExitToAppIcon/>}>Signout</Button></MenuItem>
                 </Menu>
             
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
   
  );
}

export default Navbar;



import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CreateIcon from '@mui/icons-material/Create';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PeopleIcon from '@mui/icons-material/People';
import { Avatar, Box, Button, ButtonGroup, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { currentUserSelector } from '../features/Authentication/authenticationSlice';
import { avatarBoxStyle } from '../features/UserProfile/Components/style';
const array = ["Write","Authors"]

const Navbar = () => {
  const navigate = useNavigate()
  const user = useSelector(currentUserSelector)
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
            <Button variant='contained' onClick={()=>{navigate('/')}} sx={{"&:focus":{outline:'none'},display:{xs:'none',md:'flex'}}}>
            <AlternateEmailIcon fontSize='large' sx={{mr:2,display:{xs:'none',md:'flex',cursor:'pointer'}}} />
            <Typography   variant='h5'    sx={{display:{xs:'none',md:'flex'},"&:hover":{cursor:'pointer'}}}>
              BlogBoom
            </Typography>
            </Button>
            <Box sx={{display:{xs:'flex',md:'none'}}} marginRight='auto' >
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
                    array.map((title,i)=>{
                      return <MenuItem key={i} component={Link} to={`/${array[i]}`} sx={{width:'370px'}}  onClick={handleCloseNavMenu}>
                       <Typography  display='block'>{title}</Typography></MenuItem>
                    })
                  }
                </Menu>  
            </Box>
            <Box sx={{display:{xs:'none',md:'flex'},ml:3}} flexGrow={1}>
                  <Button  color='inherit' size='large'startIcon={<CreateIcon/>} sx={{mr:2,"&:focus":{outline:'none'}}}>Write</Button>
                  <Button  color='inherit' size='large'  onClick={()=>{navigate('/authors')}} startIcon={<PeopleIcon/>} sx={{mr:2,"&:focus":{outline:'none'}}}>Authors</Button>
            </Box>
            <Button onClick={()=>{navigate('/')}}  variant='contained' sx={{"&:focus":{outline:'none'},display:{xs:'flex',md:'none',flexGrow:0},marginLeft:2,justifyContent:'center'}}>
              <AlternateEmailIcon sx={{display:{xs:'flex',md:'none'},mr:1}}/>
              <Typography  flexGrow={1} sx={{display:{xs:'flex',md:'none'}}} fontSize={{xs:'15px'}} variant='h6'>
                BlogBloom
              </Typography>
            </Button>
            <Box marginLeft='auto'>
              {user&&user.id?<IconButton onClick={handleOpenUserMenu} sx={{"&:focus":{outline:'none'}}}>
            
                 <Box sx={avatarBoxStyle}>
                 <Avatar src={user.photoUrl}  />
               </Box>
                </IconButton>:
                <ButtonGroup variant='contained' size='large'>
                  <Button sx={{color:'white',"&:hover":{color:'white'}}}  component={Link} to='/login'  >Login</Button>
                  <Button sx={{color:'white',"&:hover":{color:'white'}}} component={Link} to='/sign'>Sign Up</Button>
                </ButtonGroup>
                }
                 <Menu
                 id='menu-appbar'
                 anchorEl={anchorElUser}
                 anchorOrigin={{vertical:"top",horizontal:"right"}}
                 transformOrigin={{vertical:'top',horizontal:'right'}}
                 open= {Boolean(anchorElUser)}
                 onClose={handleCloseUserMenu}
                 sx={{mt:5}}
                 >
                    <MenuItem component={Link} to='/profile'><Button onClick={handleCloseUserMenu} sx={{"&:focus":{outline:'none',backgroundColor:'none'},"&:hover":{backgroundColor:'none'}}}  startIcon={<AccountBoxIcon/>}>Profile</Button></MenuItem>
                    <MenuItem component={Link} to='/author/1'><Button sx={{"&:focus":{outline:'none'}}} onClick={handleCloseUserMenu}  startIcon={<ExitToAppIcon/>}>Signout</Button></MenuItem>
                 </Menu>
             
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
   
  );
}

export default Navbar;


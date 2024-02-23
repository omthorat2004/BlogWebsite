import LaunchIcon from '@mui/icons-material/Launch';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Avatar, Button, ButtonGroup, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { currentUserSelector } from '../features/Authentication/authenticationSlice';
import { followAuthor } from '../features/UserProfile/userSlice';
// import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
const AuthorCard = ({name,about,photoUrl,id,followerId}) => {
  const currentUser = useSelector(currentUserSelector)
  const [isCurrentUser,setIsCurrentUser] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  console.log(currentUser)
  const [following,setFollowing] = useState(false)
  useEffect(()=>{
    if(currentUser && followerId==currentUser.id ){
      setFollowing(true)
    }
    if(currentUser && id===currentUser.id ){
      setIsCurrentUser(true)
    }

  },[id,followerId])
  const handleNavigateClick = ()=>{
    if(isCurrentUser){
      navigate('/profile')
    }
    else{
      navigate(`/author/${id}`)
    }
  }
  const handleClick = ()=>{
    if(!currentUser){
      toast.error(`Kindly login to follow `,{
        position:'top-right'
      })
    }else if(!following){
          dispatch(followAuthor({followerId:currentUser.id,id:id}))
    }else{
      
    }
  }
 
  return (
    <Card  sx={{flex:1,minWidth:'280px',maxWidth:{sx:'600px',md:'340px'},padding:'30px'}}  >
        <CardContent   sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:'3px',maxWidth:'100%'}}>
            <Avatar src={photoUrl} sx={{ '--Avatar-size': '4rem'}}/>
            <Typography variant="body3" sx={{fontSize:'18px',fontWeight:'600'}}  >{name}</Typography>
            <Typography level="body-sm" sx={{ opacity:0.6,fontSize:'15px' }}>
          {about}
        </Typography>
        </CardContent>
        <CardContent>
        <CardActions disableSpacing  sx={{alignItems:'center',display:'flex',flexDirection:'column'}} >
          <ButtonGroup variant="contained" sx={{ bgcolor: 'background.surface' }}>
            {isCurrentUser?null:<Button onClick={handleClick} startIcon={following?<PersonRemoveIcon/>:<PersonAddIcon/>} sx={{"&:focus":{outline:'none'}}}>{following?'Unfollow':'Follow'}</Button>}
            <Button startIcon={<LaunchIcon/>} onClick={handleNavigateClick} sx={{"&:focus":{outline:'none'}}}>Profile</Button>
          </ButtonGroup>
        </CardActions>
      </CardContent>
      <ToastContainer/>
    </Card>
  );
}

export default AuthorCard;

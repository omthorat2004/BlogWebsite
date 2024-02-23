import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Avatar, Card, CardActions, CardHeader, CardMedia, IconButton, Link } from '@mui/material';
import React from 'react';
const BlogCard = () => {
  return (
    <Card>
        <CardMedia
         component='img'
         sx={{objectFit:'cover',maxWidth:'1000px',overflow:'hidden'}}
         image='https://res.cloudinary.com/practicaldev/image/fetch/s--jWIGyvXL--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/55nbh4yadosc4mdtkfsh.png'
         >
        </CardMedia>
        <CardHeader
        avatar={
          <Link sx={{cursor:'pointer'}}>
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
          </Link> 
        }
        action={
          <IconButton aria-label="settings" sx={{"&:focus":{outline:'none',}}}  >
            <OpenInNewIcon />
          </IconButton>
        }
        titleTypographyProps={{variant:'h5',fontSize:{xs:'13px',sm:'15px',md:'23px'},flexWrap:'wrap',display:'flex' }}
        subheaderTypographyProps={{fontSize:{xs:'11px',sm:'15px',md:'16px'}}}
        title="Shrimp and Chorizo Paella diuweuc bueiwbdewddjh cdhjcbhjdbc hdhcbbcewciuebncbn"
        subheader="September 14, 2016"
      />
      {/* <CardContent>
        <Typography  variant='body2' textAlign='left'>
        This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        <IconButton sx={{"&:focus":{outline:'none',}}}>
          <BookmarkAddIcon fontSize='medium' sx={{fontSize:'30px'}}/>
        </IconButton>
        <IconButton sx={{"&:focus":{outline:'none',}}}>
          <FavoriteIcon fontSize='medium' sx={{fontSize:'30px'}} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default BlogCard;

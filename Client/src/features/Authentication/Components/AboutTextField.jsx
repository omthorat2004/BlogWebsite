import { InputAdornment } from '@mui/material';
import React from 'react';
import { StyledTextField } from './Login';
const AboutTextField = ({label,name,icon,handleChangeLinks,value}) => {
  return (
        <StyledTextField margin='dense' sx={{mb:2,borderColor:'black'}}  type='text' onChange={(e)=>{handleChangeLinks(e.target.name,e.target.value)}} label={label} name={name} value={name=='instagram'?value.instagram:value.facebook}  InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                {icon}
                            </InputAdornment>
                            ),
                }}/>
  );
}

export default AboutTextField;

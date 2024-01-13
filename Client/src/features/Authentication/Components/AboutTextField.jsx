import { InputAdornment } from '@mui/material';
import React from 'react';
import { StyledTextField } from './Login';
const AboutTextField = ({label,name,icon}) => {
  return (
   
        <StyledTextField margin='dense' sx={{mb:2,borderColor:'black'}}  type='text' label={label} name={name}  InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                {icon}
                            </InputAdornment>
                            ),
                }}/>

  );
}

export default AboutTextField;

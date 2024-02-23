import { Alert } from '@mui/material';
import React from 'react';
const AuthResponse = ({text,error}) => {
    // const error = useSelector(authErrorSelector)
  return (
    <Alert severity={error?'error':'info'}  sx={{mt:{xs:1,md:2,opacity:1}}}>
        {text}
    </Alert>
  );
}

export default AuthResponse;

import { Alert } from '@mui/material';
import React from 'react';
const AuthResponse = ({text}) => {
    // const error = useSelector(authErrorSelector)
  return (
    <Alert severity='error' sx={{mt:{xs:1,md:2}}}>
        {text}
    </Alert>
  );
}

export default AuthResponse;

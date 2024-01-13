import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Button, Stack, TextareaAutosize, Typography } from '@mui/material';
import React from 'react';
import AboutTextField from './AboutTextField';
import { authBoxStyle, authStackStyle, authSubmitButton } from './style';
const Register = () => {
  return (
    <Stack sx={authStackStyle}>
        <form>
            <Box overflow='hidden' sx={authBoxStyle}>
                <Typography mb={3} color='primary' variant='h5' fontSize={30}>Just Give a Additional Info</Typography>
                <AboutTextField   name='instagram' label='Instagram Link' icon={<InstagramIcon color='primary'/>}/>
                <AboutTextField name='facebook' label='Facebook Link' icon={<FacebookIcon color='primary'/>}/>
                <TextareaAutosize  minRows={7} maxLength={100}/>
                <Box display='flex' justifyContent='flex-end'>
                    <Typography color='primary' variant='body3'>Max 100 words are allowed</Typography>
                </Box>
                <Button sx={{...authSubmitButton,mt:{xs:1,md:2}}} variant='outlined'>Submit</Button>
            </Box>
        </form>
    </Stack>
  );
}

export default Register;

import React from 'react';

import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Contact() {
  return (
    <Box
      id={'Contact'}
      sx={{
        width: '100vw',
        padding: '7vh 7vw 7vh 7vw',
        backgroundColor: '#00274e',
        // backgroundColor: "#3b9dff",
        display: 'flex',
        flexDirection: {xs: 'column', md: 'row'},
        justifyContent: 'space-between'
      }}
    >
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: {xs: '10px', md: '0px'}}}>
          <img src="c-image-white.png" alt="Letter C white" height={'30px'}/>
          <CopyrightIcon sx={{color: '#ffffff', height:'13px', paddingLeft:'10px'}} />
          <Typography variant="string" color='#ffffff' sx={{fontSize: '18px', paddingLeft: '3px'}}>
            2024 Christian Delos Santos
          </Typography>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Typography variant="string" color='#ffffff' sx={{fontSize: '23px', paddingRight: '25px', fontWeight: 'bold'}}>
            Contact:
          </Typography>
          <Stack direction="row" spacing={1}>
            <Link href={'https://github.com/chrisds24'} rel="noopener noreferrer" target="_blank">
                <GitHubIcon fontSize={'large'} sx={{ color: '#ffffff', paddingRight: 1}} />
            </Link>
            <Link href={'https://www.linkedin.com/in/christiandelossantos24/'} rel="noopener noreferrer" target="_blank">
                <LinkedInIcon fontSize={'large'} sx={{ color: '#ffffff', paddingRight: 1}} />
            </Link>
            <Link href={'mailto:chdeloss24@gmail.com'} rel="noopener noreferrer" target="_blank">
                <EmailIcon fontSize={'large'} sx={{ color: '#ffffff', paddingRight: 1}} />
            </Link>            
          </Stack>
        </Box>
    </Box>
  );
}

export default Contact;
import React from 'react';

import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import { Button } from '@mui/material';

function Resume() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {xs: 'column' , md: 'row'},
        paddingBottom: '7vh'
      }}
    >
      <Typography variant="h4" gutterBottom color='#00274e' fontWeight='bold' sx={{textDecoration: 'underline', paddingRight: '6vw'}}>
        Resume
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="h4" gutterBottom color='#000000' fontWeight={'bold'}>
          Please click below to open or download.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
          }}
        >
          <Link href="ChristianDelosSantos_Resume.pdf" rel="noopener noreferrer" target="_blank">
            <Button variant="contained" sx={{ backgroundColor: '#ffffff', color: '#00274e' }}>
              <FileOpenOutlinedIcon sx={{ color: '#00274e', width: 40, height: 40, paddingRight: 1}} />
              Open
            </Button>
          </Link>   
          <Button variant="contained" sx={{ backgroundColor: '#00274e' }} href="ChristianDelosSantos_Resume.pdf" download rel="noopener noreferrer">
            <DownloadIcon sx={{ color: '#ffffff', width: 40, height: 40, paddingRight: 1}} />
            Download
          </Button>
        </Box>
      </Box>     
    </Box>
  );
}

export default Resume;
import React from 'react';

import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';

function Home() {
  return (
    <Box
      sx={{
        width: '100vw',
        padding: '17vh 7vw 7vh 7vw',
        backgroundColor: '#00274e',
        // backgroundColor: "#3b9dff",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography variant="h2" gutterBottom color="#ffffff" fontWeight='bold'>
            Christian Delos Santos
        </Typography>
        <Typography variant="h4" gutterBottom color="#3b9dff" fontWeight='bold'>
          Full-stack Developer
        </Typography>   
        <Typography variant="h6" gutterBottom color="#ffffff">
          Passionate about building accessible, powerful, and elegant applications to solve problems.
        </Typography>       
      </Box>
      <Avatar
        alt="Christian Delos Santos"
        src="linkedin_photo.jpeg"
        sx={{ width: 300, height: 300, display: { xs: 'none', sm: 'block' } }}
      />
    </Box>
  );
}

export default Home;
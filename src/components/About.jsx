import React from 'react';

import { Box } from '@mui/material';

import AboutMe from './AboutMe';
import Resume from './Resume';
import Skills from './Skills';

function About() {
  return (
    <Box
      // id={'about'}
      sx={{
        width: '100vw',
        padding: '7vh 7vw 7vh 7vw',
        backgroundColor: "#3b9dff",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <AboutMe />
      <Resume />
      <Skills />
    </Box>
  );
}

export default About;
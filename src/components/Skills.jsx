import React from 'react';

import { Box } from '@mui/material';
import { Typography } from '@mui/material';

function Skills() {
  return (
    <Box
      sx={{
        p: 7,
        display: 'flex',
        flexDirection: {xs: 'column' , md: 'row'},
      }}
    >
      <Typography variant="h4" gutterBottom color='#00274e' fontWeight='bold' sx={{textDecoration: 'underline', paddingRight: 7}}>
        Skills
      </Typography>
      <Typography variant="h4" gutterBottom color='#000000' fontWeight='bold'>
        TODO
      </Typography>
    </Box>    
  );
}

export default Skills;
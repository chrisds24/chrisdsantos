import React from 'react';

import { Box } from '@mui/material';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import Project from './Project';

const proj1Notes = [
  'hello',
  'world',
  'i need a job, seriously',
  'how do these look like in the box?',
  'askdhaskdhaskjdhaskjdhakdhaksjdhaskdhafcdhjsvgcyeafjahdsbcajhdvbakwdvagdgakgakjhsdaskjdhakjsdgajshdgajhsd',
  'Quibusdam temporibus beatae doloremque voluptatum doloribus soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae ab officiis illo voluptates recusandae.'
];

function Projects() {
  return (
    <Box
      sx={{
        width: '100vw',
        padding: '7vh 7vw 7vh 7vw',
        backgroundColor: "#00274e",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Typography variant="h4" gutterBottom color='#3b9dff' fontWeight='bold' sx={{textDecoration: 'underline'}}>
        Resume
      </Typography>
      <Stack spacing={2}>
        <Project imgSource={'ngrx.svg'} name={'SlugSell'} description={'SlugSell description'} notes={proj1Notes} />
      </Stack>
    </Box>
  );
}

export default Projects;
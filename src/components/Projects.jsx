import React from 'react';

import { Box } from '@mui/material';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import Project from './Project';


const slugSell = {
  name: 'SlugSell',
  description: 'Quibusdam temporibus beatae doloremque voluptatum doloribus soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae ab.',
  details: [
    'Quibusdam temporibus beatae doloremque voluptatum doloribus soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae ab officiis illo voluptates recusandae.',
    'hello',
    'world',
    'i need a job, seriously',
    'how do these look like in the box?',
    'askdhask dhaskjdh askjd hakdhaks jdhaskdhaf cdh jsv gcyeaf jahdsb cajhdvbak wdva gdgakga kjhsdas kjd hak jsd gajs hdga jhsd'
  ],
  imgSource: 'slugsell-pic.png',
  // github: 'https://github.com/chrisds24/SlugSell',
  live: 'https://slugsell-webapp.onrender.com',
  stack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'TypeGraphQL', 'Node.js', 'Express', 'PostgreSQL']
};

const slugScheduler = {
  name: 'SlugScheduler',
  description: 'Quibusdam temporibus beatae doloremque voluptatum doloribus soluta',
  details: [
    'Quibusdam temporibus beatae doloremque voluptatum doloribus soluta accusamus porro reprehenderit eos inventore facere',
    'hello fugit, molestiae ab officiis illo voluptates recusandae.',
    'world jsv gcyeaf jahdsb cajhdvbak wdva gdgakga kjhsdas',
  ],
  imgSource: 'slugscheduler-pic.png',
  github: 'https://github.com/chrisds24/SlugScheduler',
  stack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'TypeGraphQL', 'Node.js', 'Express', 'PostgreSQL']
};

const projects = [slugSell, slugScheduler];

function Projects() {
  return (
    <Box
      id={'Projects'}
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
      <Typography variant="h4" gutterBottom color='#ffffff' fontWeight='bold' sx={{textDecoration: 'underline', paddingBottom: '4vh'}}>
        Projects
      </Typography>
      <Stack spacing={'4vh'}>
        {projects.map((proj, idx) => (
          <Project key={idx} project={proj} />
        ))}
      </Stack>
    </Box>
  );
}

export default Projects;
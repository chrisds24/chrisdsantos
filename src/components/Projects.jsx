import React from 'react';

import { Box } from '@mui/material';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import Project from './Project';


const slugSell = {
  name: 'SlugSell',
  description: 'E-commerce app to make transactions with other users.',
  details: [
    'Comprehensive CRUD functionality',
    'Admin and mod app to edit categories and suspend products/users',
    'JWT for authentication',
    'Server-side rendering on certain pages for SEO',
    'Internationalization (i18n) and localization (l10n)',
    'Amazon S3 bucket to store images'
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
  stack: ['JavaScript', 'React', 'Bulma', 'Python', 'FastAPI', 'Selenium', 'PostgreSQL']
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
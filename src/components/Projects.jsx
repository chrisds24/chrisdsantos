import React from 'react';

import { Box } from '@mui/material';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import Project from './Project';

const qu1cksave = {
  name: 'qu1cksave',
  description: 'Manage your job applications and files in one place',
  details: [
    'Robust filtering to find your jobs easily',
    'Cross-browser compatible, fully responsive, and user-friendly UI',
    'JWT for authentication',
    'Amazon RDS and Amazon S3 for secure and reliable storage for your jobs and files'
  ],
  imgSource: 'track_jobsearch.png',
  live: 'https://qu1cksave.vercel.app',
  stack: ['TypeScript', 'React', 'Material UI', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'AWS RDS', 'AWS S3']
};

const slugSell = {
  name: 'SlugSell',
  description: 'E-commerce app to make transactions with other users.',
  details: [
    'Comprehensive CRUD functionality to view, post, edit, and delete products',
    'Admin and mod app to edit categories and suspend products/users',
    'Server-side rendering on certain pages for improved SEO',
    'Internationalization (i18n) and localization (l10n) for accessibility',
    'Amazon S3 bucket to store images'
  ],
  imgSource: 'slugsell-pic.png',
  // github: 'https://github.com/chrisds24/SlugSell',
  // live: 'https://slugsell-webapp.onrender.com',
  stack: ['TypeScript', 'React', 'Tailwind CSS', 'Next.js', 'TypeGraphQL', 'Node.js', 'Express', 'PostgreSQL', 'AWS S3']
};

const slugScheduler = {
  name: 'SlugScheduler',
  description: 'Tool to create and verify UCSC class schedules.',
  details: [
    'Selenium and Python to web scrape UCSC classes and requirements',
    'Save previously created schedules',
    'Verify a schedule for multiple school years',
  ],
  imgSource: 'slugscheduler-pic.png',
  github: 'https://github.com/chrisds24/SlugScheduler',
  stack: ['JavaScript', 'React', 'Bulma', 'Python', 'FastAPI', 'Selenium', 'PostgreSQL']
};

const projects = [qu1cksave, slugSell, slugScheduler];

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
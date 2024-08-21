import React from 'react';

import { Box } from '@mui/material';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import Experience from './Experience';

const exp1 = {
  position: 'Freelance AI Trainer',
  date: 'May 2024 – Present',
  company: 'Data Annotation Tech',
  location: 'Remote',
  details: [
    'Create coding prompts and grade responses used to train large language models (LLMs) using JavaScript, React, and Python, allowing generative AI to produce more accurate and helpful coding related content',
  ],
  projects: [
      {name: 'N/A'}
  ],
  skills: ['JavaScript', 'React', 'Python']
};

const exp2 = {
    position: 'Lead Full Stack Developer',
    date: 'April 2023 – June 2023',
    company: 'Tech4Good',
    location: 'Santa Cruz, CA',
    details: [
      'Guided a team of 9 developers who created over 10 dynamic web pages for a user-centered web application',
      'Spearheaded the skill development of novice developers and new team members by providing mentorship',
      'Enforced adherence to software development best practices by evaluating pull requests and conducting code reviews',
      'Cooperated with UI/UX designers to ensure accurate translation of Figma designs into user interfaces',
      'Designed a NoSQL data model to be used for a cloud-hosted non-relational database called Cloud Firestore'
    ],
    projects: [
        {name: 'ExploreCareers'}
    ],
    skills: ['HTML', 'CSS', 'TypeScript', 'Angular', 'NgRx', 'RxJS', 'Firebase', 'Cloud Firestore', 'Figma']
};

const exp3 = {
    position: 'Full Stack Developer',
    date: 'March 2022 – April 2023',
    company: 'Tech4Good',
    location: 'Santa Cruz, CA',
    details: [
      'Developed frontend components using HTML, SCSS, TypeScript, and Angular for 3 social computing projects utilizing a Firebase backend',
      'Exercised a responsive web design (RWD) approach, ensured cross-browser compatibility, and performed manual testing to create high-quality software that is used by a university class of 100+ students',
      'Coordinated and consulted with team leads for feedback, improving code quality and reducing technical debt'
    ],
    projects: [
        {name: 'Annota V2', live: 'https://annota.soe.ucsc.edu/#/'},
        {name: 'Collectively', live: 'https://collectively.soe.ucsc.edu/#/landing'},
        {name: 'Gratitude', live: 'https://gratitude.soe.ucsc.edu/#/landing'}
    ],
    skills: ['HTML', 'CSS', 'TypeScript', 'Angular', 'NgRx', 'RxJS', 'Firebase', 'Cloud Firestore', 'Figma']
};

const experiences = [exp1, exp2, exp3];

function Experiences() {
  return (
    <Box
      id={'Experience'}
      sx={{
        width: '100vw',
        padding: '7vh 7vw 7vh 7vw',
        backgroundColor: "#3b9dff",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Typography variant="h4" gutterBottom color='#00274e' fontWeight='bold' sx={{textDecoration: 'underline', paddingBottom: '4vh'}}>
        Experience
      </Typography>
      <Stack spacing={'4vh'}>
        {experiences.map((exp, idx) => (
          <Experience key={idx} experience={exp} />
        ))}
      </Stack>
    </Box>
  );
}

export default Experiences;
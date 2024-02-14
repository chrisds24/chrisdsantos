import React from 'react';

import { Box } from '@mui/material';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import Experience from './Experience';

const exp1 = {
    position: 'Lead Full Stack Developer',
    date: 'April 2023 – June 2023',
    company: 'Tech4Good',
    location: 'Santa Cruz, CA',
    details: [
      'Guided a team of 9 developers who created over 10 web pages for a user-centered web application',
      'Onboarded new team members by guiding them through the complex codebase, teaching them relevant concepts, and demonstrating coding best practices',
      'Boosted team productivity by providing mentorship, which helped the team achieve its goals 3 weeks early',
      'Ensured production-level code by evaluating pull requests and conducting code reviews to enhance code quality',
      'Cooperated with UI/UX designers to ensure proper translation of Figma prototypes into user interfaces'
    ],
    projects: [
        {name: 'ExploreCareers', live: 'https://tech4good.soe.ucsc.edu/#/'}
    ],
    skills: ['HTML', 'CSS', 'TypeScript', 'Angular', 'NgRx', 'RxJS', 'Firebase', 'Cloud Firestore', 'Figma']
};

const exp2 = {
    position: 'Full Stack Developer',
    date: 'March 2022 – April 2023',
    company: 'Tech4Good',
    location: 'Santa Cruz, CA',
    details: [
      'Utilized HTML, CSS, TypeScript, Angular, NgRx, and RxJS to create components for web pages that asynchronously retrieve and store data in a NoSQL cloud database called Cloud Firestore',
      'Consulted with team leads to guarantee valid translation of Figma designs into high-quality code',
      'Validated the correctness of the application by thoroughly testing it with different inputs and edge cases',
      'Coordinated with other developers to facilitate the seamless integration of code'
    ],
    projects: [
        {name: 'Annota V2', live: 'https://tech4good.soe.ucsc.edu/#/'},
        {name: 'Collectively', live: 'https://tech4good.soe.ucsc.edu/#/'},
        {name: 'Gratitude', live: 'https://tech4good.soe.ucsc.edu/#/'}
    ],
    skills: ['HTML', 'CSS', 'TypeScript', 'Angular', 'NgRx', 'RxJS', 'Firebase', 'Cloud Firestore', 'Figma']
};

const experiences = [exp1, exp2];

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
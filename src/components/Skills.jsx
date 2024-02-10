import React from 'react';

import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
// import { Item } from '@mui/material';

const languages = [
  { name: 'JavaScript', source: 'javascript.png' },
  { name: 'TypeScript', source: 'typescript.png' },
  { name: 'HTML', source: 'html.png' },
  { name: 'CSS', source: 'css.png' },
  { name: 'Python', source: 'python.png' },
  { name: 'C', source: 'c.png' },
  { name: 'SQL', source: 'sql.png' },
];

// Frameworks and libraries
const frameworks = [
  { name: 'React', source: 'react.png' },
  { name: 'Angular', source: 'angular.png' },
  { name: 'Node.js', source: 'nodejs.png' },
  { name: 'Express', source: 'express.png' },
  { name: 'Next.js', source: 'nextjs.png' },
  { name: 'GraphQL', source: 'graphql.png' },
  { name: 'TypeGraphQL', source: 'typegraphql.png' },
  { name: 'NgRx', source: 'ngrx.svg' },
  { name: 'RxJS', source: 'rxjs.png' },
  { name: 'Jest', source: 'jest.png' },
  { name: 'Tailwind CSS', source: 'tailwind.png' },
  { name: 'Material UI', source: 'mui.png' },
  { name: 'React Native', source: 'react.png' }   
];

// Tools/Technologies/Other
const tools = [
  { name: 'Git', source: 'git.png' },
  { name: 'GitHub', source: 'github.png' },
  { name: 'PostgreSQL', source: 'postgresql.png' },
  { name: 'Docker', source: 'docker.png' },
  { name: 'Trello', source: 'trello.png' },
  { name: 'Firebase', source: 'firebase.png' },
  { name: 'Cloud Firestore', source: 'firebase.png' },
  { name: 'Figma', source: 'figma.png' },
  { name: 'Render', source: 'render.svg' },
  { name: 'Vercel', source: 'vercel.png' },  
];

function Skills() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {xs: 'column' , md: 'row'},
      }}
    >
      {/*
        JavaScript, TypeScript, HTML, CSS
      */}
      <Typography variant="h4" gutterBottom color='#00274e' fontWeight='bold' sx={{textDecoration: 'underline', paddingRight: '9vw'}}>
        Skills
      </Typography>
      <Grid container direction='column'>
        <Grid paddingBottom={'5vh'} container direction='column'>
          <Typography variant="h4" gutterBottom color='#000000' fontWeight={'bold'} sx={{paddingBottom: 1}}>
            Languages
          </Typography>
          <Grid rowSpacing={2} columnSpacing={4} container direction='row'>
            {languages.map((language, idx) => (
              <Grid item key={idx}>
                <Box sx={{display: 'flex', flexDirection: 'column'}} >
                  <img src={language.source} alt={language.name} style={{ height: '50px', objectFit:'contain'}} />
                  { language.name }
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid paddingBottom={'5vh'} container direction='column'>
          <Typography variant="h4" gutterBottom color='#000000' fontWeight={'bold'} sx={{paddingBottom: 1}}>
            Frameworks / Libraries
          </Typography>
          <Grid rowSpacing={2} columnSpacing={4} container direction='row'>
            {frameworks.map((framework, idx) => (
              <Grid item key={idx}>
                <Box sx={{display: 'flex', flexDirection: 'column'}} >
                  <img src={framework.source} alt={framework.name} style={{ height: '50px', objectFit:'contain'}} />
                  { framework.name }
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container direction='column'>
          <Typography variant="h4" gutterBottom color='#000000' fontWeight={'bold'} sx={{paddingBottom: 1}}>
            Tools / Technologies
          </Typography>
          <Grid rowSpacing={2} columnSpacing={4} container direction='row'>
            {tools.map((tool, idx) => (
              <Grid item key={idx}>
                <Box sx={{display: 'flex', flexDirection: 'column'}} >
                  <img src={tool.source} alt={tool.name} style={{ height: '50px', objectFit:'contain'}} />
                  { tool.name }
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>      
    </Box>    
  );
}

export default Skills;
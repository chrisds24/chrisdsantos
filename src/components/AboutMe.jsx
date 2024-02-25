import React from 'react';

import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';

const aboutMe1 = "Ever since I was young, I've always been into RPG games since " +
  "I love being able to customize my own characters, decide how I want to play the " +
  "game, and go on an adventure to discover new things. But unfortunately, " +
  "my journeys in these games would end quickly and I'd run out of things to do. " +
  "When I got into the world of programming and computer science, I fell in " +
  "love with it since it is basically a real life version of these games. " +
  "There are so many languages, libraries, frameworks, and other technologies " +
  "to choose from and I could decide what kind of developer I want to be. " +
  "But unlike the games that I've played, my journey as a developer is an " +
  "endless one since there are always new emerging technologies for me to " +
  "learn and work with.";

const aboutMe2 = "I have experience in full stack web development. Working " +
  "on the backend allows me to utilize my creativity and problem solving " +
  "skills to ensure that the architecture, API, database queries, and other " +
  "backend logic are sensible and optimal for best performance. I also enjoy " +
  "working on the frontend since I like making applications that are " +
  "accessible, intuitive, and easy for people to use.";

const aboutMe3 = "I also have some knowledge in mobile development, which I " +
  "was introduced to in a university course. I look forward to expand on " +
  "this skill by making mobile versions of some apps I have worked on.";
  
const aboutMe4 = "When I'm not writing code, I like to cook, watch " +
  "basketball, and play video games.";

const aboutMeItems = [aboutMe1, aboutMe2, aboutMe3, aboutMe4];

function AboutMe() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {xs: 'column' , md: 'row'},
        paddingBottom: '7vh',
      }}
    >
        <Typography variant="h4" gutterBottom color='#00274e' fontWeight='bold' sx={{textDecoration: 'underline', paddingRight: '7vw'}}>
            About Me
        </Typography>
        <Card
          sx={{backgroundColor: '#ffffff', padding: '2vh 1vw 0vh 1vw'}}
          elevation={0}
        >
          {aboutMeItems.map((item, idx) => (
            <Typography key={idx} variant="h4" paragraph color='#000000' sx={{fontSize: '18px'}}>
              {item}
            </Typography>
          ))}
        </Card>
    </Box>    
  );
}

export default AboutMe;
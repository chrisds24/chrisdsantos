import React from 'react';

import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import BugReportIcon from '@mui/icons-material/BugReport';

const aboutMe1 = "Growing up, I've always been into RPG games since I like " +
  "being able to customize my own characters, choose how I want to play the " +
  "game, and go on an adventure to discover new things. But unfortunately, " +
  "my journey in these games would end and I'd run out of things to do. " +
  "When I got into the world of programming and computer science, I fell in " +
  "love with it since it is basically a real life version of these games. " +
  "There's so many languages, libraries, frameworks, and other technologies " +
  "to choose from and I could decide what kind of developer I want to be. " +
  "But unlike the games that I've played, my journey as a developer is an " +
  "endless one since there's always new emerging technologies for me to " +
  "lean and work with.";   

const aboutMeItems = [
  aboutMe1, 
  'Quibusdam temporibus beatae doloremque voluptatum doloribus soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae ab officiis illo voluptates recusandae.',
  'Reiciendis similique exercitationem consequatur, nobis placeat illo laudantium',
  'Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem dolores sunt inventore perferendis, aut sapiente modi nesciunt.',
  'In my free time, I like to cook, watch basketball, and play video games.'
];

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
        <List sx={{backgroundColor: '#6eb7ff'}}>
          {aboutMeItems.map((item, idx) => (
            <ListItem key={idx}>
                <ListItemIcon>
                  <BugReportIcon sx={{ color: '#ffffff' }} />
                </ListItemIcon>
                <ListItemText
                primary={`${item}`}
                primaryTypographyProps={{
                    fontSize: '19px',
                    color: '#000000',
                    // fontWeight: 'bold'
                }} 
                />
            </ListItem>
          ))}
        </List>
    </Box>    
  );
}

export default AboutMe;
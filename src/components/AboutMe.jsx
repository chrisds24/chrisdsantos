import React from 'react';

import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import BugReportIcon from '@mui/icons-material/BugReport';

const aboutMeItems = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,aliquam dolore excepturi quae.',
    'Quibusdam temporibus beatae doloremque voluptatum doloribus soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae ab officiis illo voluptates recusandae.',
    'Reiciendis similique exercitationem consequatur, nobis placeat illo laudantium',
    'Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem dolores sunt inventore perferendis, aut sapiente modi nesciunt.',
    'Ipsam, illo quod.'
];

function AboutMe() {
  return (
    <Box
        sx={{
        p: 7,
        display: 'flex',
        flexDirection: {xs: 'column' , md: 'row'},
        }}
    >
        <Typography variant="h4" gutterBottom color='#00274e' fontWeight='bold' sx={{textDecoration: 'underline', paddingRight: 7}}>
            About Me
        </Typography>
        <List>
          {aboutMeItems.map((item) => (
            <ListItem>
                <ListItemIcon>
                  <BugReportIcon sx={{ color: '#ffffff' }} />
                </ListItemIcon>
                <ListItemText
                primary={`${item}`}
                primaryTypographyProps={{
                    fontSize: '18px',
                    color: '#000000',
                    fontWeight: 'bold'
                }} 
                />
            </ListItem>
          ))}
        </List>
    </Box>    
  );
}

export default AboutMe;
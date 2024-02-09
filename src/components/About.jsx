import React from 'react';

import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import BugReportIcon from '@mui/icons-material/BugReport';
import { Link } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import { Button } from '@mui/material';

const aboutMeItems = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,aliquam dolore excepturi quae.',
  'Quibusdam temporibus beatae doloremque voluptatum doloribus soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae ab officiis illo voluptates recusandae.',
  'Reiciendis similique exercitationem consequatur, nobis placeat illo laudantium',
  'Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem dolores sunt inventore perferendis, aut sapiente modi nesciunt.',
  'Ipsam, illo quod.'
];

function About() {
  return (
    <Box
      sx={{
        width: '100vw',
        p: 7,
        // backgroundColor: '#00274e',
        backgroundColor: "#3b9dff",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
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
      <Box
        sx={{
          p: 7,
          display: 'flex',
          flexDirection: {xs: 'column' , md: 'row'},
        }}
      >
        <Typography variant="h4" gutterBottom color='#00274e' fontWeight='bold' sx={{textDecoration: 'underline', paddingRight: 7}}>
            Resume
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
            <Typography variant="h4" gutterBottom color='#000000' fontWeight={'bold'} sx={{paddingRight: 7}}>
              Please click below to open or download.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
              }}
            >
              <Link href="ChristianDelosSantos_Resume.pdf" rel="noopener noreferrer" target="_blank">
                <Button variant="contained" sx={{ backgroundColor: '#ffffff', color: '#00274e' }}>
                  <FileOpenOutlinedIcon sx={{ color: '#00274e', width: 40, height: 40, paddingRight: 1}} />
                  OPEN
                </Button>
              </Link>   
              <Button variant="contained" sx={{ backgroundColor: '#00274e' }} href="ChristianDelosSantos_Resume.pdf" download rel="noopener noreferrer">
                <DownloadIcon sx={{ color: '#ffffff', width: 40, height: 40, paddingRight: 1}} />
                Download
              </Button>
            </Box>
        </Box>     
      </Box>
    </Box>
  );
}

export default About;
import React from 'react';

import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import BugReportIcon from '@mui/icons-material/BugReport';
import { Link } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import { Button } from '@mui/material';

import AboutMe from './AboutMe';
import Resume from './Resume';

function About() {
  return (
    <Box
      sx={{
        width: '100vw',
        p: 7,
        backgroundColor: "#3b9dff",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <AboutMe />
      <Resume />
    </Box>
  );
}

export default About;
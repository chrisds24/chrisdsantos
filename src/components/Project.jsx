import React from 'react';

import { Paper } from '@mui/material';
import { Box } from '@mui/material';
import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

function Project(props) {
  return (
    <Paper
      sx={{backgroundColor: '#3b9dff', marginBottom: '7vh', width: '90vw'}}
      elevation={6}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column' , md: 'row'}
        }}
      >
        <img src={'ngrx.svg'} alt={'NgRx'} style={{ height: '33vh', objectFit:'contain'}} />
        <Card
          elevation={0}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#3b9dff'
            }}
          > 
            <Typography variant="string" gutterBottom color='#00274e' fontWeight='bold' sx={{textDecoration: 'underline', fontSize: '22px'}}>
              {props.name}
            </Typography>
            <Typography variant="string" gutterBottom color='#00274e' fontWeight='bold' sx={{textDecoration: 'underline', fontSize: '22px'}}>
              {props.description}
            </Typography>
            <List>
              {props.notes.map((note) => (
                <ListItem>
                  <ListItemIcon>
                    <WaterDropIcon sx={{ color: '#ffffff' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${note}`}
                    primaryTypographyProps={{
                      fontSize: '18px',
                      color: '#000000',
                      fontWeight: 'bold'
                    }} 
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
    </Paper>
  );
}

export default Project;
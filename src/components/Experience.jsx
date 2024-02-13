import React from 'react';

import { Box } from '@mui/material';
import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import { Chip } from '@mui/material';
import { Grid } from '@mui/material';

function Experience(props) {
  return (
    <Card
        sx={{backgroundColor: '#6eb7ff', marginBottom: '7vh', width: '90vw', padding: '2vh 1vw 2vh 1vw'}}
        elevation={6}
    >
        {/* 
          In https://www.colorhexa.com/3b9dff, '#0884ff is a brighter monochromatic color
        */}
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#6eb7ff',
            // padding: {md: '0vh 0vw 0vh 0vw'},
            '&:last-child': {paddingBottom: 0}
          }}
        >
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'space-between'}}>
                <Typography variant="string" color='#000000' fontWeight='bold' sx={{fontSize: '23px'}}>
                    {props.experience.position}
                </Typography>
                <Typography variant="string" color='#000000' sx={{fontSize: '18px'}}>
                    {props.experience.date}
                </Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'space-between'}}>
                <Typography variant="string" color='#00274e' fontWeight='bold' sx={{fontSize: '20px'}}>
                    {props.experience.company}
                </Typography>
                <Typography variant="string" color='#00274e' sx={{fontSize: '18px'}}>
                    {props.experience.location}
                </Typography>
            </Box>
            <List
                sx={{
                padding: '0',
                margin: '0'
                }}
            >
                {props.experience.details.map((detail) => (
                <ListItem
                    sx={{padding: '0.6vh 2vw'}}
                >
                    <ListItemIcon>
                      <CodeIcon sx={{ color: '#ffffff' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${detail}`}
                      primaryTypographyProps={{
                        fontSize: '17px',
                        color: '#000000',
                        fontWeight: 'bold'
                      }} 
                    />
                </ListItem>
                ))}
            </List>
            <Grid rowSpacing={1} columnSpacing={1} container direction='row' sx={{paddingLeft: '2vw', paddingTop: '12px'}}>
                {props.experience.skills.map((skill, idx) => (
                <Grid item key={idx}>
                    <Chip label={skill} sx={{backgroundColor: '#3b9dff', color: '#000000', fontWeight: 'bold'}} />
                </Grid>
                ))}
            </Grid>
        </Box>
        </CardContent>
    </Card>
  );
}

export default Experience;
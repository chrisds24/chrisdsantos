import React from 'react';

import { Paper } from '@mui/material';
import { Box } from '@mui/material';
import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import { Chip } from '@mui/material';
import { Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button, ButtonGroup } from '@mui/material';
import { Link } from '@mui/material';

function Project(props) {
  return (
    <Paper
      sx={{backgroundColor: '#004181', marginBottom: '7vh', width: '90vw', padding: '2vh 1vw 2vh 1vw'}}
      elevation={6}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column' , md: 'row'}
        }}
      >  
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <img src={props.project.imgSource} alt={'NgRx'} style={{ height: '40vh', objectFit:'contain'}} />
          <ButtonGroup disableElevation variant="contained" aria-label="Github and live links" sx={{justifyContent: 'center'}}>
              <Link href={props.project.github} rel="noopener noreferrer" target="_blank">
                <Button
                  variant="contained"
                  sx={{
                    color: '#ffffff',
                    backgroundColor: props.project.github ? '#3b9dff': '#808080',
                    // "&:hover": props.project.github ? '#0000ff': '#808080',
                    height: '35px',
                    marginTop: '10px'
                  }}
                >
                  <GitHubIcon sx={{ color: '#ffffff', width: 30, height: 30, paddingRight: 1}} />
                  {props.project.github ? 'GitHub' : 'Unavailable'}
                </Button>
              </Link> 
              <Link href={props.project.live} rel="noopener noreferrer" target="_blank">
                <Button
                  variant="contained"
                  sx={{
                    color: '#ffffff',
                    backgroundColor: props.project.live ? '#3b9dff': '#808080',
                    // "&:hover": props.project.github ? '#0000ff': '#808080',
                    height: '35px',
                    marginTop: '10px'
                  }}
                >
                  <VisibilityIcon sx={{ color: '#ffffff', width: 30, height: 30, paddingRight: 1}} />
                  {props.project.live ? 'Live' : 'Unavailable'}
                </Button>
              </Link>   
          </ButtonGroup>
        </Box>
        <Card
          elevation={0}
          square={true}
        >
          {/* 
            In https://www.colorhexa.com/00274e, #004181 is a brighter monochromatic color
           */}
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#004181',
              padding: {md: '0vh 0vw 0vh 0vw'},
              '&:last-child': {paddingBottom: 0}
            }}
          >
            <Typography variant="string" color='#ffffff' fontWeight='bold' sx={{fontSize: '23px'}} textAlign={'center'}>
              {props.project.name}
            </Typography>
            <Typography variant="string" color='#62b1ff' fontWeight='bold' sx={{fontSize: '18px', paddingLeft: '2vw'}}>
              {props.project.description}
            </Typography>
            <List
              sx={{
                padding: '0',
                margin: '0'
              }}
            >
              {props.project.details.map((detail) => (
                <ListItem
                  sx={{padding: '0.6vh 2vw'}}
                >
                  <ListItemIcon>
                    <CodeIcon sx={{ color: '#000000' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${detail}`}
                    primaryTypographyProps={{
                      fontSize: '17px',
                      color: '#ffffff',
                    //   fontWeight: 'bold'
                    }} 
                  />
                </ListItem>
              ))}
            </List>
            <Grid rowSpacing={1} columnSpacing={1} container direction='row' sx={{paddingLeft: '2vw', paddingTop: '12px'}}>
              {props.project.stack.map((tech, idx) => (
                <Grid item key={idx}>
                  <Chip label={tech} sx={{backgroundColor: '#00274e', color: '#ffffff'}} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Paper>
  );
}

export default Project;
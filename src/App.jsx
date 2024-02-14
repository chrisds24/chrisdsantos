import './App.css';
import React from 'react';

import { Box, CssBaseline } from '@mui/material';
import MyAppBar from './components/MyAppBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experiences from './components/Experiences';

function App() {
  return (
    <Box sx={{display: 'flex', height:"100vh", backgroundColor: "#3b9dff"}}>
      <CssBaseline />
      <MyAppBar />
      <Box>
          <Home id={'home'}/>
          <About id={'about'} />
          <Projects id={'projects'} />
          <Experiences id={'experiences'} />
      </Box>
    </Box>
  );
}

export default App;

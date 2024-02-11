import './App.css';
import React from 'react';

import { Box, CssBaseline } from '@mui/material';
import MyAppBar from './components/MyAppBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <Box sx={{display: 'flex', height:"100vh", backgroundColor: "#3b9dff"}}>
      <CssBaseline />
      <MyAppBar />
      <Box>
        <Home />
        <About />
        <Projects />
      </Box>
    </Box>
  );
}

export default App;

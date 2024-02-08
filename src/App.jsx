import './App.css';
import React from 'react';

import { Box, CssBaseline, Toolbar } from '@mui/material';
import MyAppBar from './components/MyAppBar';
import Home from './components/Home';

function App() {
  return (
    <Box sx={{display: 'flex', height:"100vh", backgroundColor: "#3b9dff"}}>
      <CssBaseline />
      <MyAppBar />
      <Box sx={{ paddingTop: 10 }}>
        <Home />
      </Box>
    </Box>
  );
}

export default App;

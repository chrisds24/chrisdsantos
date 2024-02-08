import './App.css';
import React from 'react';

import { Box, CssBaseline } from '@mui/material';
import MyAppBar from './components/MyAppBar';
import Content from './components/Content';

function App() {
  return (
    <Box sx={{display: 'flex', height:"100vh", backgroundColor: "#3b9dff"}}>
      <CssBaseline />
      <MyAppBar />
      <Content />
    </Box>
  );
}

export default App;

import './App.css';
import React from 'react';

import { Box } from '@mui/material';
import MyAppBar from './components/MyAppBar';
import Content from './components/Content';

function App() {
  return (
    <Box sx={{display: 'flex'}}>
      <MyAppBar />
      <Content />
    </Box>
  );
}

export default App;

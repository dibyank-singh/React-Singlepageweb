import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Applunch from './components/Header/Applunch';
import { ThemeProvider } from 'styled-components';

// Component imports

import Header from './components/Header/Header';
import Platform from './components/Header/Platform';
import Vision from './components/Header/Vision';
import Home from './components/Home/Home';

function App() {

  // Styled cse components
  const theme={
    colors:{
      black:"#000000",
      white:"#FFFFFF"
    },
    media: {
      mobile:"768px", tab:"998px"
    },

  };
  
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/platform" element={<Platform/>} />
        <Route path="/vision" element={<Vision/>} />
        <Route path="/applunch" element={<Applunch/>} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

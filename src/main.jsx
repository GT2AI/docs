// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import theme from './theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);

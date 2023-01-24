import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Chakra theme
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

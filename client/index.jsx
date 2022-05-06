import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/themeConfig';
import './styles/resets.css';
import App from './app';
import { UserProvider } from './lib';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </ThemeProvider>,
  document.querySelector('#root')
);

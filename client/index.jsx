import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { UserProvider } from './lib';
import theme from './utils/themeConfig';
import './styles/resets.css';
import App from './app';

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

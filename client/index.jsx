import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './app';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/themeConfig'
import './styles/resets.css';


ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.querySelector('#root')
);

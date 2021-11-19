import React from "react";
import ReactDOM  from "react-dom";
import App from './app';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/themeConfig'


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.querySelector('#root')
);

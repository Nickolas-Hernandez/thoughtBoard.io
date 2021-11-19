import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      text: {
        primary: '#ffffff'
      }
    },
    typography: {
      fontFamily: ['Source Sans Pro'],
      h1: {
        fontFamily: 'Quicksand',
        fontSize: '3rem',
        fontWeight: '400'
      },
      h2: {
        fontFamily: 'Quicksand',
        fontSize: '2.4rem',
        fontWeight: '400'
      },
      h3: {
        fontFamily: 'Quicksand',
        fontSize: '1.8rem',
        fontWeight: '400'
      },
      h4: {
        fontFamily: 'Source Sans Pro',
        fontSize: '1.6rem',
        fontWeight: '600'
      },
      h5: {
        fontFamily: 'Source Sans Pro',
        fontSize: '1.4rem',
        fontWeight: '600'
      },
      h6: {
        fontFamily: 'Source Sans Pro',
        fontSize: '1.2rem',
        fontWeight: '600'
      },
      body1: {
        fontFamily: "Source Sans Pro",
        fontWeight: "400",
        fontSize: "1.2rem"
      },
      button: {
        fontFamily: "Quicksand",
        fontSize: "1.2rem"
      }
    },
  });

  export default theme;

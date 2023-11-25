import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const BackgroundImage = styled('div')(({ theme }) => ({
  backgroundImage: 'url(assets/yannick-pulver-hopX_jpVtRM-unsplash.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'absolute',
  width: '50%',
  height: '100%',
  right: 0,
  top: 0,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '50%'
  }
}));

const StyledPaper = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: 400
}));

const StyledInputField = styled(TextField)(({ theme }) => ({
  color: 'black'
}));

export {
  BackgroundImage,
  StyledPaper,
  StyledInputField
};

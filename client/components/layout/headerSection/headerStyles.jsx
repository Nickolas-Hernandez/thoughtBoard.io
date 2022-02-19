import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';

const HeaderContainer = styled(Box)({
  backgroundColor: '#2C2C31',
  color: '#FAF9F6',
  height: '90px',
  padding: '.5rem 1rem',
  display: 'flex',
  alignItems: 'flex-end',
  borderBottom: '1px solid black'
});

export default HeaderContainer;
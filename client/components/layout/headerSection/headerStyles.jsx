import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';

const StyledHeader = styled(Box)({
  backgroundColor: '#2C2C31',
  color: '#FAF9F6',
  height: '90px',
  padding: '.5rem 10px',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between'
});

const ProjectContainer = styled(Box)({
  padding: '0',
  display: 'flex',
  alignItems: 'flex-end'
});

export {
  StyledHeader,
  ProjectContainer
};

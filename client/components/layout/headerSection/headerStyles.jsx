import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';

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

const StyledProjButton = styled(AddIcon)({
  margin: '0 10px 0 1rem',
  cursor: 'pointer',
  variant: 'body1',
  fontSize: '2.5rem'
});

export {
  StyledHeader,
  ProjectContainer,
  StyledProjButton
};

import { TextField, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledForm = styled(Box)({
  display: 'flex',
  flexDirection: 'row'
});

const StyledInput = styled(TextField)({
  color: 'white',
  label: 'Project Name',
  variant: 'standard'
});

export {
  StyledForm,
  StyledInput
};

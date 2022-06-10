import { TextField, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledForm = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end'
});

const StyledInput = styled(TextField)({
  color: 'white',
  outline: 'none',
  width: '200px'
});

export {
  StyledForm,
  StyledInput
};

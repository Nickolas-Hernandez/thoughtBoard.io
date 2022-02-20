import { Select, FormControl, InputLabel } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';

const SytledProjSelector = styled(FormControl)({
  width: '250px',
  fontSize: '1rem'
});

const StyledLabel = styled(InputLabel)({
  color: 'white',
  backgroundColor: '#2C2C31'
});

const StyledSelect = styled(Select)({
  borderColor: '#2C2C31',
  backgroundColor: '#2C2C31'
});

const StyledIcon = styled(ArrowDropDownIcon)({
  color: 'white'
});

export {
  SytledProjSelector,
  StyledLabel,
  StyledSelect,
  StyledIcon
};

import { Select, FormControl, InputLabel } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';

const SytledProjSelector = styled(FormControl)({
  width: '200px',
  fontSize: '1rem',
  borderBottom: '1px solid #ffffff'
});

const StyledLabel = styled(InputLabel)({
  color: 'white',
  backgroundColor: '#2C2C31'
});

const StyledSelect = styled(Select)({
  borderColor: 'white',
  backgroundColor: '#2C2C31'
});

const StyledIcon = styled(ArrowDropDownIcon)({
  color: 'white'
});

const MenuProps = {
  PaperProps: {
    style: {
      backgroundColor: 'black'
    }
  }
};

export {
  SytledProjSelector,
  StyledLabel,
  StyledSelect,
  StyledIcon,
  MenuProps
};

import Drawer from '@mui/material/Drawer';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { styled } from '@mui/material/styles';

const StyledSideBar = styled(Drawer)({
  backgroundColor: '#2C2C31',
  height: 'calc(100vh - 90px)',
  width: '25%',
  variant: 'permanent',
  anchor: 'left',
  padding: '2px 10px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
});

const StyledAddIcon = styled(AddCircleOutlinedIcon)({
  fill: 'white',
  opacity: '25%',
  margin: '0.2rem auto',
  fontSize: '28px',
  cursor: 'pointer',
  transition: 'opacity 0.1s linear',
  '&:hover': {
    opacity: '80%'
  }
});

const paperStyles = {
  position: 'absolute',
  left: '10px',
  top: '2px',
  right: '10px',
  height: 'auto',
  backgroundColor: '#2C2C31'
};

export {
  StyledSideBar,
  StyledAddIcon,
  paperStyles
};

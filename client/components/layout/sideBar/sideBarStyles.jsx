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
  backgroundColor: 'white',
  opacity: '50%'
});

const paperStyles = {
  position: 'absolute',
  left: '10px',
  top: '2px',
  right: '10px',
  height: 'auto'
};

export {
  StyledSideBar,
  StyledAddIcon,
  paperStyles
};

import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

const StyledSideBar = styled(Drawer)({
  backgroundColor: '#2C2C31',
  height: 'calc(100vh - 90px)',
  width: '25%',
  variant: 'permanent',
  anchor: 'left',
  padding: '2px 10px'
});

export default StyledSideBar;

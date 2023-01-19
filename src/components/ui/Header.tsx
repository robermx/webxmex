import { cloneElement, ReactElement } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { theme } from '../../styles/theme';

interface Props {
  children?: ReactElement | any;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = (props: Props) => {
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar color="secondary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="error"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box sx={{ ...theme.mixins.toolbar }}></Box>
    </>
  );
};

export default Header;

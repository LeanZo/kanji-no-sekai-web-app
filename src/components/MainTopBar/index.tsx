import React from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Grid, useMediaQuery, Button, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useStyles } from './styles';

function MainTopBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isSM = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container alignItems="center">
          {
            isSM ? (
              <>
                <div className={classes.menuButton}>
                  <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    
                    onClick={handleMenuClick}
                  >
                    <MenuIcon />
                  </IconButton>
                </div>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                </Menu>
                <img src="/logo.png" alt="漢字の世界" className={classes.logo} />
              </>
            ) : (
              <>
                <img src="/logo.png" alt="漢字の世界" className={classes.logo} />
                <Button color="inherit" className={classes.button}>
                  Home
                </Button>
              </>
            )
          }
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default MainTopBar;

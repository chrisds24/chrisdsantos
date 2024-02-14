import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Link } from '@mui/icons-material';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Projects', 'Experience', 'Contact'];

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        paddingTop: 1
      }}
    >
      <Box
        component="img"
        sx={{
            height: 64,
            width: 64,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
        }}
        alt="Letter c image"
        src="c-image-white.png"
      />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }} href={`/#${item}`}>
                <ListItemText primary={item} sx={{ color: '#ffffff' }} />
              </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window.document.body;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
            backgroundColor: '#00274e',
            paddingBottom: 1,
            paddingTop: 1
        }}
        // elevation={0}
      >
        <Toolbar>
          <a href="/#">
            <Box
              component="img"
              sx={{
                  height: 64,
                  width: 64,
              }}
              alt="Letter c image"
              src="c-image-white.png"
            />
          </a>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: 'auto' }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#ffffff' }} href={`/#${item}`}>
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, marginLeft: 'auto' }}
          >
            <MenuIcon
            sx={{
                height: 48,
                width: 48
            }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          anchor='right'
          PaperProps={{
            sx: {
              backgroundColor: "#00274e",
            }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;
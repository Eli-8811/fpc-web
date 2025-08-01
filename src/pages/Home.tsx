import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@store/index';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '@store/session/sessionThunks';

const Home: React.FC = () => {

const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logoutUser());
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              FPC
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Home;
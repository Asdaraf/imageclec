import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <div className="navbar-container">
          <div className="logo-container">
            <Box
              component="img"
              className="logo-image"
              alt="ImageClec Logo" 
              src="/assets/logo-removebg-preview.png"
            />
            <Typography variant="h6" component="div" className="logo-text">
              IMAGECLEC
            </Typography>
          </div>
        </div>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={RouterLink} to="/login">
            Iniciar Sesión
          </Button>
          <Button color="inherit" component={RouterLink} to="/register">
            Registrarse
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 
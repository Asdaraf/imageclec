import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* 
            Box de MUI puede actuar como cualquier elemento HTML usando la prop 'component'
            En este caso, lo usamos como una imagen ('img')
            
            sx: permite definir estilos:
            - height: altura fija de 40px
            - width: 'auto' mantiene la proporción de la imagen
            - cursor: 'pointer' cambia el cursor a una mano al pasar por encima
            
            alt: texto alternativo para accesibilidad
            src: ruta a la imagen (debe estar en la carpeta public)
          */}
          <Box
            component="img"
            sx={{
              height: 200,
              width: 'auto',
              cursor: 'pointer',
              filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.2))',
              
            }}
            alt="ImageClec Logo" 
            src="/assets/logo-removebg-preview.png"
          />
        </Typography>
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
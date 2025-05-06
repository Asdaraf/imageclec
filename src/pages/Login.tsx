import React from 'react';
import { Box, Container, Typography, TextField, Button, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Iniciar Sesión
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Correo Electrónico"
              type="email"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              margin="normal"
              required
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3 }}
            >
              Iniciar Sesión
            </Button>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant="body2">
                ¿No tienes una cuenta?{' '}
                <Button component={RouterLink} to="/register" color="primary">
                  Regístrate
                </Button>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login; 
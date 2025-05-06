import React from 'react';
import { Box, Container, Typography, TextField, Button, Paper, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Register = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Registrarse
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Nombre Completo"
              margin="normal"
              required
            />
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
            <TextField
              fullWidth
              label="Confirmar Contraseña"
              type="password"
              margin="normal"
              required
            />
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Tipo de Usuario
            </Typography>
            <RadioGroup row>
              <FormControlLabel value="ecografista" control={<Radio />} label="Ecografista" />
              <FormControlLabel value="centro" control={<Radio />} label="Centro de Salud" />
            </RadioGroup>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3 }}
            >
              Registrarse
            </Button>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant="body2">
                ¿Ya tienes una cuenta?{' '}
                <Button component={RouterLink} to="/login" color="primary">
                  Inicia Sesión
                </Button>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Register; 
import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Conectando Centros de Salud con Ecografistas
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            La plataforma que facilita la conexión entre profesionales y centros médicos
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={RouterLink}
            to="/register"
            sx={{ mt: 4 }}
          >
            Comenzar Ahora
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid component="div" xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Para Centros de Salud
            </Typography>
            <Typography>
              Encuentra ecografistas calificados para cubrir tus necesidades de personal
            </Typography>
          </Grid>
          <Grid component="div" xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Para Ecografistas
            </Typography>
            <Typography>
              Encuentra oportunidades de trabajo en diferentes centros de salud
            </Typography>
          </Grid>
          <Grid component="div" xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Proceso Simple
            </Typography>
            <Typography>
              Registro fácil, búsqueda rápida y conexión directa
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 
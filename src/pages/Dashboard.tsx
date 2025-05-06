import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Panel de Control
        </Typography>
        <Grid container spacing={3}>
          <Grid component="div" xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Perfil
                </Typography>
                <Typography variant="body1">
                  Aquí podrás ver y editar tu información personal
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Ver Perfil
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid component="div" xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Oportunidades
                </Typography>
                <Typography variant="body1">
                  Explora las oportunidades disponibles
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Ver Oportunidades
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard; 
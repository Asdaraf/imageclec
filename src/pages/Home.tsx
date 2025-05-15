import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, TextField, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Email as EmailIcon, Phone as PhoneIcon, LocationOn as LocationOnIcon } from '@mui/icons-material';

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
          <Grid container spacing={2}>
            <Grid>

            </Grid>
            <Grid>

            </Grid>
          </Grid>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: '700', textAlign: 'left' }}>
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
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" gutterBottom>
            Nuestro Impacto
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 4,
                textAlign: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)'
                }
              }}
            >
              <Typography 
                variant="h2" 
                component="div" 
                sx={{ 
                  color: 'primary.main',
                  fontWeight: 'bold',
                  mb: 2 
                }}
              >
                150+
              </Typography>
              <Typography variant="h6" gutterBottom>
                Tecnólogos Activos
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Profesionales calificados brindando servicios de calidad
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 4,
                textAlign: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)'
                }
              }}
            >
              <Typography 
                variant="h2" 
                component="div" 
                sx={{ 
                  color: 'primary.main',
                  fontWeight: 'bold',
                  mb: 2 
                }}
              >
                50+
              </Typography>
              <Typography variant="h6" gutterBottom>
                Centros Médicos
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Instituciones de salud confían en nuestra red
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 4,
                textAlign: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)'
                }
              }}
            >
              <Typography 
                variant="h2" 
                component="div" 
                sx={{ 
                  color: 'primary.main',
                  fontWeight: 'bold',
                  mb: 2 
                }}
              >
                5000+
              </Typography>
              <Typography variant="h6" gutterBottom>
                Exámenes Realizados
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Diagnósticos precisos entregados a pacientes
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            mb: 6,
            fontWeight: 'bold'
          }}
        >
          Centros Médicos Asociados
        </Typography>
        <Box
          sx={{
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              width: '100px',
              height: '100%',
              zIndex: 2
            },
            '&::before': {
              left: 0,
              background: 'linear-gradient(to right, white, transparent)'
            },
            '&::after': {
              right: 0,
              background: 'linear-gradient(to left, white, transparent)'
            }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              animation: 'scroll 30s linear infinite',
              '@keyframes scroll': {
                '0%': {
                  transform: 'translateX(0)'
                },
                '100%': {
                  transform: 'translateX(-50%)'
                }
              }
            }}
          >
            {/* Duplicamos los logos para crear el efecto infinito */}
            {[...Array(2)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  gap: 8,
                  px: 4
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <Box
                    key={num}
                    component="img"
                    src={`/assets/medical-center-${num}.png`}
                    alt={`Centro Médico ${num}`}
                    sx={{
                      height: 80,
                      width: 'auto',
                      filter: 'grayscale(100%)',
                      opacity: 0.7,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        filter: 'grayscale(0%)',
                        opacity: 1
                      }
                    }}
                  />
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Contáctanos
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Estamos aquí para ayudarte. ¡Ponte en contacto con nosotros!
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                <EmailIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Correo Electrónico
                </Typography>
                <Typography color="text.secondary">
                  contacto@imageclec.com
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                <PhoneIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Teléfono
                </Typography>
                <Typography color="text.secondary">
                  +34 912 345 678
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                <LocationOnIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Dirección
                </Typography>
                <Typography color="text.secondary">
                  Calle Principal 123, Madrid
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Box component="form" sx={{ mt: 8 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Nombre"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Correo electrónico"
                  variant="outlined"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Asunto"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Mensaje"
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Enviar Mensaje
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Divider sx={{ my: 8 }} />

        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Navegación
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Servicios
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemButton component={RouterLink} to="/radiologia">
                    <ListItemText primary="Radiología" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component={RouterLink} to="/ecografia">
                    <ListItemText primary="Ecografía" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component={RouterLink} to="/resonancia">
                    <ListItemText primary="Resonancia Magnética" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Pacientes
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemButton component={RouterLink} to="/citas">
                    <ListItemText primary="Reservar Cita" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component={RouterLink} to="/preparacion">
                    <ListItemText primary="Preparación Exámenes" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component={RouterLink} to="/resultados">
                    <ListItemText primary="Resultados Online" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Nosotros
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemButton component={RouterLink} to="/equipo">
                    <ListItemText primary="Nuestro Equipo" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component={RouterLink} to="/tecnologia">
                    <ListItemText primary="Tecnología" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component={RouterLink} to="/instalaciones">
                    <ListItemText primary="Instalaciones" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Legal
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemButton component={RouterLink} to="/privacidad">
                    <ListItemText primary="Política de Privacidad" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component={RouterLink} to="/terminos">
                    <ListItemText primary="Términos y Condiciones" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component={RouterLink} to="/cookies">
                    <ListItemText primary="Política de Cookies" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 
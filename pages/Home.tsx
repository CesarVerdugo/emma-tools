// src/pages/Home.tsx
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ServiceCard from '../components/common/ServiceCard'; // crea este componente después
import { rentaTools, activacionesLicencias } from '../data/products'; // tu archivo de datos

const PHONE_NUMBER = '573247011133'; // cambia por tu número real

export default function Home() {
  // Selecciona destacados (puedes ajustar)
  const destacados = [
    ...rentaTools.slice(0, 6), // muestra 6 de renta
    ...activacionesLicencias.slice(0, 4), // + algunos de activaciones
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
      {/* Hero section - llamativa como en server-EmmaTools */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          py: { xs: 10, md: 14 },
          textAlign: 'center',
          background: 'linear-gradient(135deg, #ff1744 0%, #d50000 100%)', // gradiente rojo intenso
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            SERVER EmmaTools - Tu Fuente Confiable
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
            Renta de Tools • Activaciones • IMEI Services • Remotos • Todo rápido por WhatsApp
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<WhatsAppIcon />}
            href={`https://wa.me/${PHONE_NUMBER}?text=Hola,%20quiero%20información%20sobre%20servicios`}
            target="_blank"
            sx={{ px: 6, py: 1.8, fontSize: '1.3rem' }}
          >
            Contactar Ahora por WhatsApp
          </Button>
        </Container>
      </Box>

      {/* Sección destacados - grid de tarjetas grandes */}
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6, color: 'primary.main' }}>
          Productos y Herramientas Más Populares
        </Typography>

        <Grid container spacing={3}>
          {destacados.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.name}>
              <ServiceCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Opcional: Call to action final */}
      <Box sx={{ textAlign: 'center', py: 8, bgcolor: '#000' }}>
        <Typography variant="h5" gutterBottom>
          ¿Listo para tu próximo servicio?
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          href={`https://wa.me/${PHONE_NUMBER}`}
          target="_blank"
          sx={{ borderWidth: 2 }}
        >
          Hablar con Soporte 24/7
        </Button>
      </Box>
    </Box>
  );
}
import { Box, Container, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ServiceCard from '../components/common/ServiceCard';
import { rentaTools, activacionesLicencias } from '../data/products';

const PHONE_NUMBER = '573XXXXXXXXX';

export default function Home() {
  const destacados = [
    ...rentaTools.slice(0, 6),
    ...activacionesLicencias.slice(0, 4),
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 8 }}>
      {/* HERO */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            gutterBottom
            align="center"
            sx={{ mb: 3 }}
          >
            Bienvenido a Emma-Tools
          </Typography>

          <Typography
            variant="h6"
            align="center"
            sx={{ mb: 4, opacity: 0.9 }}
          >
            Renta de Tools • Activaciones • IMEI Services • Remotos • Todo rápido por WhatsApp
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<WhatsAppIcon />}
            href={`https://wa.me/${PHONE_NUMBER}?text=Hola`}
          >
            Contactar por WhatsApp
          </Button>
        </Container>
      </Box>

      {/* DESTACADOS */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 4, md: 8 },
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Productos destacados
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {destacados.map((item) => (
            <Grid
              key={item.name}
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              display="flex"
            >
              <ServiceCard {...item} />
            </Grid>
          ))}
        </Grid>
  


      </Container>
    </Box>
  );
}

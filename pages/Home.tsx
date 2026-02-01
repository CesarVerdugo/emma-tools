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
      <Box sx={{ bgcolor: 'primary.main', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom align="center">
            Bienvenido a Emma-Tools
          </Typography>
          <Button variant="contained" color="secondary" startIcon={<WhatsAppIcon />} href={`https://wa.me/${PHONE_NUMBER}?text=Hola`}>
            Contactar por WhatsApp
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6 }}>
          Productos destacados
        </Typography>

        <Grid  spacing={3} justifyContent="center" alignItems="stretch">
          {destacados.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.name}>
              <ServiceCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
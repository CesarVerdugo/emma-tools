import { Container, Typography, Grid } from '@mui/material';
import ServiceCard from '../components/common/ServiceCard';
import { imeiServices } from '../data/products';

export default function ImeiServices() {
  return (
    <Container 
  maxWidth="lg"                     // ← cambia de xl a lg para mejor equilibrio
  sx={{ 
    py: { xs: 4, md: 8 }, 
    px: { xs: 2, sm: 3, md: 4 },    // padding simétrico y menor en móvil
    mx: 'auto',                     // fuerza centrado
  }}
>
  {/* Título */}
  <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6 }}>
    IMEI Service
  </Typography>

  <Grid 
    container 
    spacing={3}
    justifyContent="center"         // ← centra las cards en móvil
  >
    {imeiServices.map((serv) => (
      <Grid 
        item 
        xs={12}                     // 1 columna en muy pequeño
        sm={6}                      // 2 columnas en móviles medianos
        md={4}                      // 3 en tablet
        lg={3}                      // 4 en desktop
        key={serv.name}
      >
        <ServiceCard {...serv} />
      </Grid>
    ))}
  </Grid>
</Container>
  );
}
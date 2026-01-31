import { Container, Typography, Grid } from '@mui/material';
import ServiceCard from '../components/common/ServiceCard';
import { activacionesLicencias } from '../data/products';

export default function ActivacionesLicencias() {
  return (
    <Container
  maxWidth="md"                           // ← md es ideal para móvil: más estrecho que lg/xl
  disableGutters={false}                  // mantiene padding simétrico
  sx={{
    py: { xs: 4, md: 8 },
    px: { xs: 2, sm: 3 },                 // padding pequeño en móvil
    mx: 'auto',                           // fuerza centrado horizontal
    width: '100%',
    maxWidth: { xs: '100%', sm: '540px', md: '900px' }, // controla máximo ancho en móvil
    overflowX: 'hidden',                  // evita cualquier scroll horizontal
  }}
>
  {/* Título */}
  <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6, color: '#F59E0B' }}>
    Activaciones y Licencias
  </Typography>

  <Grid
    container
    spacing={{ xs: 2, sm: 3, md: 4 }}     // menos espacio entre cards en móvil
    justifyContent="center"               // centra las cards horizontalmente
    alignItems="stretch"                  // todas las cards mismo alto
  >
    {activacionesLicencias.map((item) => (
      <Grid
        item
        xs={12}                           // 1 columna en muy pequeño
        sm={6}                            // 2 columnas en móviles medianos (más ancho)
        md={4}                            // 3 en tablet
        lg={3}                            // 4 en desktop
        key={item.name}
      >
        <ServiceCard {...item} />
      </Grid>
    ))}
  </Grid>
</Container>
  );
}
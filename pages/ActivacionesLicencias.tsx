import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import ServiceCard from '../components/common/ServiceCard';
import { activacionesLicencias } from '../data/products';

export default function ActivacionesLicencias() {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        mx: 'auto',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6 }}>
        Activaciones y Licencias
      </Typography>

      <Grid
        
        spacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        alignItems="stretch"
      >
        {activacionesLicencias.map((item) => (
          <Grid
           // Agregamos item={true} para resolver overload
           size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            key={item.name}
          >
            <ServiceCard 
              name={item.name}
              price={item.price}
              desc={item.desc}
             // image={item.image}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
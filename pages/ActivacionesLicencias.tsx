import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import ServiceCard from '../components/common/ServiceCard';
import { activacionesLicencias } from '../data/products';

export default function ActivacionesLicencias() {
  return (
    <Container
      maxWidth="lg"   // ⬅️ más ancho que "md"
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
        Activaciones y Licencias
      </Typography>

      <Grid
        container                    // ✅ MUY IMPORTANTE
        spacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        alignItems="stretch"
      >
        {activacionesLicencias.map((item) => (
          <Grid
            key={item.name}
            size={{ xs: 12, sm: 6, md: 4 }} // ⬅️ responsive real
            display="flex"                 // ⬅️ estira la card
          >
            <ServiceCard
              name={item.name}
              price={item.price}
              desc={item.desc}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

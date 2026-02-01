import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import ServiceCard from '../components/common/ServiceCard';
import { imeiServices } from '../data/products';

export default function ImeiServices() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6 }}>
        IMEI Services
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
        {imeiServices.map((item) => (
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
  );
}

import { Container, Typography, Grid } from '@mui/material';
import ServiceCard from '../components/common/ServiceCard';
import { imeiServices } from '../data/products';

export default function ImeiServices() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        IMEI Service
      </Typography>

      <Grid  spacing={3} justifyContent="center" alignItems="stretch">
        {imeiServices.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.name}>
            <ServiceCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
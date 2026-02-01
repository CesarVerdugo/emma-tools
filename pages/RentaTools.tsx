// src/pages/RentaTools.tsx
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ServiceCard from '../components/common/ServiceCard';
import { rentaTools } from '../data/products';

export default function RentaTools() {
  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        color="primary"
        sx={{ mb: 6 }}
      >
        Renta de Tools
      </Typography>

      <Grid container spacing={4}>
        {rentaTools.map((tool) => (
          <Grid
            key={tool.name}
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          >
            <ServiceCard {...tool} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}


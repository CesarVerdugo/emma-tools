import { Container, Typography, Grid } from '@mui/material';
import ServiceCard from '../components/common/ServiceCard';
import { remotos } from '../data/products';

export default function Remotos() {
  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Typography variant="h3" align="center" gutterBottom color="primary" sx={{ mb: 6 }}>
        Remotos
      </Typography>
      <Grid container spacing={4}>
        {remotos.map((tool) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={tool.name}>
            <ServiceCard {...tool} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
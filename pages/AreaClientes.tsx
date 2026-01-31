// src/pages/AreaClientes.tsx (o como lo tengas)
import { Container, Typography, Grid } from '@mui/material';
import DownloadCard from '../components/common/DownloadCard';
import { downloads } from '../data/products';

export default function AreaClientes() {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        mx: 'auto',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6, color: '#F59E0B' }}>
        Descargas
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        alignItems="stretch"
      >
        {downloads.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={item.name}
          >
            <DownloadCard
              name={item.name}
              link={item.link}
              idLine={item.idLine}   // si agregas descripción después
              infoLine={item.infoLine}   // si agregas descripción después
              desc={item.desc}   // si agregas descripción después
              image={item.image} // si agregas imagen
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
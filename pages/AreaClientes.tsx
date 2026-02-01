import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

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
      <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6 }}>
        Descargas
      </Typography>

      <Grid
        
        spacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        alignItems="stretch"
      >
        {downloads.map((item) => (
          <Grid
          size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            key={item.name}
          >
            <DownloadCard
              name={item.name}
              link={item.link}
              desc={item.desc} // solo si lo tienes
              // Quitamos idLine, infoLine, image si no existen
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
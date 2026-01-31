// src/components/layout/Footer.tsx
import { Box, Typography, Link, IconButton, Container } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#0F172A', // color oscuro que combina con tu tema
  color: '#CBD5E1',
  padding: theme.spacing(4, 0),
  marginTop: 'auto', // empuja el footer al final si usas flex
}));

const SocialLink = styled(IconButton)({
  color: '#CBD5E1',
  '&:hover': {
    color: '#25D366', // verde WhatsApp al hover
  },
});

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = '573247011133'; // ← cambia por tu número real
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
          }}
        >
          {/* Izquierda: Marca y eslogan */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" fontWeight="bold" color="white" gutterBottom>
              Emma-Tools
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Herramientas que desbloquean tu éxito
            </Typography>
            <Typography variant="caption" sx={{ mt: 1, display: 'block', opacity: 0.7 }}>
              © {currentYear} Emma-Tools. Todos los derechos reservados.
            </Typography>
          </Box>

          {/* Derecha: Contacto rápido */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Contáctanos 24/7:
            </Typography>

            <SocialLink
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              size="large"
            >
              <WhatsAppIcon fontSize="large" />
            </SocialLink>
          </Box>
        </Box>
      </Container>
    </FooterContainer>
  );
}
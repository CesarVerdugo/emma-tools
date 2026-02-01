// src/components/layout/Footer.tsx
import { Box, Typography, Link, IconButton, Container } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Usamos la variante Outlined para evitar errores de resolución

const PHONE_NUMBER = '573247011133'; // ← Cambia por tu número real (sin + ni espacios)
const whatsappLink = `https://wa.me/${PHONE_NUMBER}`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0F172A', // fondo oscuro que combina con tu tema
        color: '#CBD5E1',
        padding: '32px 0',
        marginTop: 'auto', // empuja al fondo si usas flex en App.tsx
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Izquierda: Marca y copyright */}
          <Box>
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

          {/* Derecha: Contacto rápido por WhatsApp */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Contáctanos 24/7:
            </Typography>

            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              aria-label="WhatsApp"
            >
              <IconButton
                color="inherit"
                size="large"
                sx={{
                  '&:hover': { color: '#25D366' }, // verde WhatsApp al hover
                }}
              >
                <WhatsAppIcon fontSize="large" />
              </IconButton>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
// src/components/layout/Navbar.tsx
import { AppBar, Toolbar, Typography, Button, IconButton, Box, useMediaQuery } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import logotipo from '../../src/assets/images/logotipo.png';

const PHONE_NUMBER = '573247011133'; // Tu número real (sin + ni espacios)

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'IMEI Service', path: '/imei-service' },
  { label: 'Remotos', path: '/remotos' },
  { label: 'Renta de Tools', path: '/renta-tools' },
  { label: 'Activaciones y Licencias', path: '/activaciones-licencias' },
  { label: 'Área del Cliente', path: '/area-cliente' },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const whatsappLink = `https://wa.me/${PHONE_NUMBER}`;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        backgroundColor: '#000000', // negro puro como muchos sitios EmmaTools
        borderBottom: '1px solid #30363d',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
        
        {/* Logo + Nombre */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={logotipo} // pon tu logo en public/logo.png
            alt="Server EmmaTools" 
            style={{ height: 80, marginRight: 12 }} 
          />
          <Typography 
            variant="h6" 
            component={RouterLink} 
            to="/" 
            sx={{ 
              textDecoration: 'none', 
              color: 'white', 
              fontWeight: 'bold',
              letterSpacing: 1,
            }}
          >
            SERVER EmmaTools
          </Typography>
        </Box>

        {/* Links en desktop */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                color="inherit"
                sx={{
                  color: location.pathname === item.path ? 'primary.main' : 'white',
                  fontWeight: location.pathname === item.path ? 700 : 400,
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* Botón WhatsApp en desktop */}
            <IconButton 
              color="secondary" 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ ml: 2 }}
            >
            <WhatsAppIcon fontSize="large" />
            </IconButton>
          </Box>
        )}

        {/* Menú hamburguesa en mobile */}
        {isMobile && (
          <IconButton 
            color="inherit" 
            aria-label="open drawer" 
            edge="end" 
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Menú mobile simple (puedes mejorarlo con Drawer si quieres) */}
      {isMobile && mobileOpen && (
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            bgcolor: 'background.paper', 
            p: 2,
            borderTop: '1px solid #30363d',
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={RouterLink}
              to={item.path}
              fullWidth
              sx={{ 
                justifyContent: 'flex-start',
                color: location.pathname === item.path ? 'primary.main' : 'white',
                mb: 1,
              }}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Button>
          ))}
          <Button
            variant="contained"
            color="secondary"
            startIcon={<WhatsAppIcon />}
            href={whatsappLink}
            target="_blank"
            fullWidth
            sx={{ mt: 2 }}
          >
            Contactar por WhatsApp
          </Button>
        </Box>
      )}
    </AppBar>
  );
}
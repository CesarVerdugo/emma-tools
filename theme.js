// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#E63946' },      // rojo coral para botones principales
    secondary: { main: '#25D366' },    // verde WhatsApp
    accent: { main: '#F59E0B' },       // amarillo para precios
    background: { default: '#111827', paper: '#1F2937' },
    text: { primary: '#FFFFFF', secondary: '#D1D5DB' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif', // Inter es muy legible y moderna en 2026
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#E63946',
          '&:hover': { backgroundColor: '#D62839' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { backgroundColor: '#1F2937', borderRadius: 12 },
      },
    },
  },
});

export default theme;
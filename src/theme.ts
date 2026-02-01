// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#E63946' },
    secondary: { main: '#25D366' },
    // accent: { main: '#F59E0B' },  // ← comenta o quita esta línea
    background: { default: '#111827', paper: '#1F2937' },
    text: { primary: '#FFFFFF', secondary: '#D1D5DB' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
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
  },
});

export default theme;
// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';          // ← asegúrate de importar esto
import theme from '../theme';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>               {/* ← envuelve aquí */}
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
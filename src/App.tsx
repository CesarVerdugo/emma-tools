// src/App.tsx
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

// Layout (ajustado a nombres reales)
import Navbar from '../components/layout/Navbar'; // ← ahora con "b" y carpeta "layout"
import Footer from '../components/layout/Footer';

// Páginas (todos coinciden con tus archivos reales)
import Home from '../pages/Home';
import ImeiServices from '../pages/ImeiServices';
import Remotos from '../pages/Remotos';
import RentaTools from '../pages/RentaTools';
import ActivacionesLicencias from '../pages/ActivacionesLicencias';
import AreaClientes from '../pages/AreaClientes';

export default function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imei-service" element={<ImeiServices />} />
          <Route path="/remotos" element={<Remotos />} />
          <Route path="/renta-tools" element={<RentaTools />} />
          <Route path="/activaciones-licencias" element={<ActivacionesLicencias />} />
          <Route path="/area-cliente" element={<AreaClientes />} />
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
}
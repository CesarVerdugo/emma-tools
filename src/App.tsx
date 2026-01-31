// src/App.tsx
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layaout/Navbar';
import Footer from '../components/layaout/Footer';
import Home from '../pages/Home';
import RentaTools from '../pages/RentaTools';
import ImeiServices from '../pages/ImeiServices';
import Remotos from '../pages/Remotos';
import ActivacionesLicencias from '../pages/ActivacionesLicencias';
import AreaClientes from '../pages/AreaClientes'

// ... importa las otras páginas

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="renta-tools" element={<RentaTools />} />
        <Route path="imei-service" element={<ImeiServices />} />
        <Route path="remotos" element={<Remotos />} />
        <Route path="activaciones-licencias" element={<ActivacionesLicencias />} />
        <Route path="area-cliente" element={<AreaClientes />} />
        {/* Agrega las otras rutas */}
        {/* <Route path="/pon-la-orden" element={<PonLaOrden />} /> */}
        {/* etc. */}
      </Routes>
      <Footer />

    </>
  );
}
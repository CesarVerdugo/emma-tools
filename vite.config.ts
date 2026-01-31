// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],

  // ← ¡Aquí va el server! Al mismo nivel que plugins
  server: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.a.free.pinggy.link',                // permite TODOS los subdominios de Pinggy (recomendado)
      // 'wjjnx-45-233-169-252.a.free.pinggy.link',  // opcional: solo este específico
    ],
    // Opcional pero útil: permite conexiones externas sin restricciones adicionales
    host: true,   // o '0.0.0.0'
  },
})
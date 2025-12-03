/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // IMPORTANTE: No uses basePath ni assetPrefix para GitHub Pages
  // Deja que el script prepare-github.js maneje las rutas
  
  images: {
    unoptimized: true, // Necesario para export estático
  },
  
  trailingSlash: false, // GitHub Pages funciona mejor sin trailing slash
  
  // Optimizaciones
  compress: true,
  
  // Configuración para evitar errores
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
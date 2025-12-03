/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  
  // IMPORTANTE: Para GitHub Pages, usa basePath vacío y NO uses assetPrefix
  basePath: isGithubPages ? '' : '',
  // NO uses assetPrefix con next/font
  
  images: {
    unoptimized: true,
  },
  
  trailingSlash: false,
  
  // Configuración específica para fonts
  experimental: {
    optimizeCss: false, // Desactiva optimización CSS temporalmente
  }
};

module.exports = nextConfig;
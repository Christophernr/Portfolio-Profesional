// next.config.js - DEBE QUEDAR ASÍ:
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Portfolio-Profesional',  // ← Con "s"
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // AÑADE ESTO también:
  assetPrefix: '/Portfolio-Profesional',
};  // HASTA AQUÍ

module.exports = nextConfig;
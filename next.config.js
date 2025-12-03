/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Portfolio-Profesional',
  // Asegúrate de NO tener assetPrefix
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
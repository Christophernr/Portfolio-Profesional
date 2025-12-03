/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Portfolio-Profesional',  // ← AÑADE ESTO
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
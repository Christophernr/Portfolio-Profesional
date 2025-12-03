/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',  // ← DEBE estar VACÍO para /docs
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
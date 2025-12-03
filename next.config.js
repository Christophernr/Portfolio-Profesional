/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  
  // SOLO para GitHub Pages usa rutas relativas
  basePath: isGithubPages ? '' : '',
  assetPrefix: isGithubPages ? './' : '',
  
  images: {
    unoptimized: true,
  },
  
  // IMPORTANTE: false para GitHub Pages
  trailingSlash: false,
  
  // Para evitar problemas con caché
  generateBuildId: async () => {
    return 'build-' + Date.now();
  }
};

module.exports = nextConfig;
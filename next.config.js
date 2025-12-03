/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Portfolio-Profesional", // ← IMPORTANTE: mismo nombre que tu repo
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;

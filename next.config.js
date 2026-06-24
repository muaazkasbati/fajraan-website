// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;

// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  compress: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.devsolsystems.co.uk',
      },
    ],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  experimental: {
    optimizeCss: true,           // Keep this
    optimizePackageImports: [
      'framer-motion',
      'gsap',
      '@studio-freight/lenis',
    ],
    scrollRestoration: true,
  },

  productionBrowserSourceMaps: false,
  reactStrictMode: true,
});
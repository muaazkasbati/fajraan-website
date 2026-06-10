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
  swcMinify: true,
  compress: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        // Allow images from your WordPress blog
        protocol: 'https',
        hostname: 'blog.devsolsystems.co.uk',
      },
    ],
  },

  // experimental: {
  //   optimizeCss: true,
  //   optimizePackageImports: [
  //     'framer-motion',
  //     'lucide-react',
  //     '@heroicons/react',
  //   ],
  // },
})

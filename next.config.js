/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true 
  },
  async redirects() {
    return [
      {
        source: '/love',
        destination: '/',
        permanent: false,
        has: [
          {
            type: 'cookie',
            key: 'valentine_accepted',
            value: 'true'
          }
        ]
      }
    ];
  },
  experimental: {
    serverComponents: true,
    serverActions: true,
  }
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
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
  }
};

module.exports = nextConfig;

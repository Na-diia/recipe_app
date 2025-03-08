/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        deviceSizes: [375, 768, 1440],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.themealdb.com',
            port: '',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
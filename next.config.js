/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_IMG_HOST,
        port: '',
        pathname: `/${process.env.NEXT_PUBLIC_IMG_PATH}/**`,
      },
    ],
  },
    async redirects() {
        return [
          {
            source: '/redirect',
            destination: '/',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig

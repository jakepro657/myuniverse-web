/** @type {import('next').NextConfig} */
const nextConfig = {
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_IMG_HOST,
        port: "",
        pathname: `/**`,
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/redirect",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: `/auth/:path*`,
        destination: `${process.env.NEXT_PUBLIC_API_URL}/auth/:path*`,
      }
    ]
  }
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_API: "http://localhost:3000/api",
  },
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["next.tsx"],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    styledComponents: true,
    relay: {
      src: "./",
      language: "typescript",
    },
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;

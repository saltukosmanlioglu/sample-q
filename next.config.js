/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_API: "http://www.omdbapi.com/?i=tt3896198&apikey=a6f3388",
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

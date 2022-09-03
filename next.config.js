/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_API: "https://api.themoviedb.org/4/list/1",
    NEXT_APP_LOCAL_API: "http://localhost:3000/api/",
    NEXT_APP_CDN_API: "https://image.tmdb.org/t/p/w500",
  },
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["next.tsx", "next.ts"],
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

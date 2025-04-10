/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  experimental: {
    serverActions: {
      serverComponentsExternalPackages: ["mongoose"],
      bodySizeLimit: "4mb",
    },
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;

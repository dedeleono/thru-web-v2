const { withContentlayer } = require("next-contentlayer2");
const createNextIntlPlugin = require("next-intl/plugin");

// Replace require with dynamic import
import("./env.mjs");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
  },
};

const withIntl = withNextIntl(nextConfig);

module.exports = withContentlayer(withIntl);

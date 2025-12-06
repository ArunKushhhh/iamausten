import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

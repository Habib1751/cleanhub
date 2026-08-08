import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    // Source photos are compressed to a max width of 1600px — requesting
    // larger buckets forces Vercel's optimizer to upscale on every cold
    // request, which took 80+ seconds and made images appear broken.
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;

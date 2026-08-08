import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    // Vercel's on-demand image optimization is taking 25-80+ seconds per
    // request on this deployment regardless of requested size (even
    // repeated/cached requests), making every photo on the site appear
    // broken. All source photos are already compressed to proper web
    // sizes (150-315KB) ahead of time, so skip the optimizer entirely
    // and serve the static files directly.
    unoptimized: true,
  },
};

export default nextConfig;

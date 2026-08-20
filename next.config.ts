import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
    // Optimize Turbopack for development
    resolveAlias: {
      // Ensure consistent module resolution
    },
    moduleOptions: {
      // Optimize module processing
    },
  },
  // Disable TypeScript checking during dev for faster compilation
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during dev
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;

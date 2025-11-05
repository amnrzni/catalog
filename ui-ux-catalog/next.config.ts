import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security
  poweredByHeader: false,
  
  // Development
  reactStrictMode: true,
  
  // Performance
  compress: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;

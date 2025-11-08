/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'unsplash.com'],
  },
  // Disable font optimization to avoid network issues in CI/sandboxed environments
  optimizeFonts: false,
}

module.exports = nextConfig

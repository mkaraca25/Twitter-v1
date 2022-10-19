/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['help.twitter.com'],
  },
  swcMinify: true,
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['lh3.googleusercontent.com'],
        minimumCacheTTL: 31536000,
        formats: ['image/avif', 'image/webp'],
    },
};

module.exports = nextConfig;

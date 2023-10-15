const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
	reactStrictMode: true,
	images: {
		domains: ['lh3.googleusercontent.com'],
		minimumCacheTTL: 31536000,
		formats: ['image/avif', 'image/webp'],
	},
});

module.exports = nextConfig;

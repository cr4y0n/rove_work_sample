/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'demo.litium.com',
				port: '',
				pathname: '/storage/**',
			},
		],
	},
}

module.exports = nextConfig
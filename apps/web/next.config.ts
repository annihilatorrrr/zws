import type { NextConfig } from 'next';

export default {
	env: {
		NEXT_PUBLIC_WEBSITE_URL: process.env.WEBSITE_URL,
		NEXT_PUBLIC_API_URL: process.env.API_URL,
	},
	productionBrowserSourceMaps: true,
	redirects: async () => [
		{
			source: '/docs/api',
			destination: '/api-docs',
			permanent: true,
		},
		{
			source: '/api/:path*',
			destination: `${process.env.API_URL}/:path*`,
			permanent: true,
		},
	],
	allowedDevOrigins: ['zws.im.localhost'],
} satisfies NextConfig;

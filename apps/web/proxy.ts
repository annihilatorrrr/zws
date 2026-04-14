import { type NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
	throw new TypeError('Missing NEXT_PUBLIC_API_URL env var');
}

const apiUrl = new URL(API_URL);

export function proxy(request: NextRequest): NextResponse {
	// Redirect to API subdomain
	const url = new URL(request.url);

	url.hostname = apiUrl.hostname;
	url.port = apiUrl.port;
	url.pathname = request.nextUrl.pathname.slice('/api/'.length);

	return NextResponse.redirect(url, 301);
}

// Configure matcher to only run middleware on API routes
export const config = {
	matcher: ['/api/:path*'],
};

'use client';

import { Button } from './components/button';
import { H1 } from './components/headings/h1';

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
	return (
		<main className='flex flex-col items-center justify-center gap-4 sm:pt-16 md:pt-36'>
			<H1>An unexpected error occurred</H1>
			<Button onClick={reset}>Try again</Button>
		</main>
	);
}

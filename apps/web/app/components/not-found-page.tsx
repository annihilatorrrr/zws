import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/components/button';
import { H1 } from '@/app/components/headings/h1';

export function NotFoundPage() {
	return (
		<main className='flex flex-col items-center justify-center gap-4 sm:pt-16 md:pt-36'>
			<H1>404 - Page not found</H1>
			<Button href='/'>
				Home <ArrowRightIcon className='ml-2 h-6 w-6' />
			</Button>
		</main>
	);
}

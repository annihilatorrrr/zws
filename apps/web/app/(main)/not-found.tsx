import type { Metadata } from 'next';
import { NotFoundPage } from '@/app/components/not-found-page';
import { siteName } from '@/app/shared-metadata';

const title = 'Not Found';
export const metadata: Metadata = {
	title,
	openGraph: {
		siteName,
		title,
	},
};

export default function NotFound() {
	return <NotFoundPage />;
}

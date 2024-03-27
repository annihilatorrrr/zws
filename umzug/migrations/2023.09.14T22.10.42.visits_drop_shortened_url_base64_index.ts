import type { MigrationFn } from 'umzug';
import type { MigrationContext } from '../types';

export const up: MigrationFn<MigrationContext> = async (params) => {
	const { mongo } = params.context;
	const db = mongo.db('zws');

	const visits = db.collection('visits');

	if (await visits.indexExists('shortenedUrlBase64_1')) {
		await visits.dropIndex('shortenedUrlBase64_1');
	}
};
export const down: MigrationFn<MigrationContext> = async (_params) => {
	// No down migration
};

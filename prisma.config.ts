import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
	schema: 'prisma/schema.prisma',
	migrations: {
		path: 'prisma/migrations',
		seed: 'tsx prisma/seed.ts'
	},
	datasource: {
		// Prisma's env() throws when a variable is missing, which would break the
		// fallback, so read process.env directly. `||` also treats empty values as unset.
		url: process.env.TURSO_DATABASE_URL || process.env.LOCAL_DATABASE_URL
	}
});

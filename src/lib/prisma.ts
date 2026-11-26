import { PrismaClient } from '@prisma-app/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';
// generate with npx prisma generate then re-run npm run dev to apply changes to the database adapter

const url = process.env.TURSO_DATABASE_URL || process.env.LOCAL_DATABASE_URL;

if (!url) {
	throw new Error('Set TURSO_DATABASE_URL or LOCAL_DATABASE_URL in your .env file');
}

const adapter = new PrismaLibSql({
	url,
	// Left undefined (not the string "undefined") when using a local file
	authToken: process.env.TURSO_AUTH_TOKEN || undefined
});

export const prisma = new PrismaClient({ adapter });

export default prisma;

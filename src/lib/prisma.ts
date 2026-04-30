import { PrismaClient } from '@prisma-app/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';
// generate with npx prisma generate then re-run npm run dev to apply changes to the database adapter

const adapter = new PrismaLibSql({
	url: `${process.env.TURSO_DATABASE_URL ?? process.env.LOCAL_DATABASE_URL}`,
	authToken: `${process.env.TURSO_AUTH_TOKEN}`
});

export const prisma = new PrismaClient({ adapter });

export default prisma;

import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '@prisma-app/client';
// generate with npx prisma generate then re-run npm run dev to apply changes to the database adapter

const adapter = new PrismaBetterSqlite3({
	url: 'file:./dev.db'
});

export const prisma = new PrismaClient({ adapter });

export default prisma;

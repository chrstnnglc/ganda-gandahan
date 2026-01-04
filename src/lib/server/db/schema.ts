import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { generateRandomId } from '../utils';

const timestamp = {
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date())
};

const books = sqliteTable('books', {
	...timestamp,
	id: text('id')
		.primaryKey()
		.notNull()
		.$defaultFn(() => generateRandomId()),
	publicationDate: integer('publication_date', { mode: 'timestamp' }).notNull(),
	title: text('title').notNull(),
	author: text('author').notNull(),
	isbn: integer('isbn').unique()
});

type InsertBookParams = typeof books.$inferInsert;

export { books, type InsertBookParams };